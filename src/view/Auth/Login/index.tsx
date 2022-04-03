import "./style.scss";
import React, { useState } from "react";
import { Col, Form, Input, message, Radio, Row, Select, Space } from "antd";
import { logoBrand, mainTitle } from "@assets/images";
import { generatePath, useHistory, useParams } from "react-router";
import { useAltaIntl } from "@shared/hook/useTranslate";
import { ButtonSubmit } from "../Components/ButtonSubmit";
import { LoginInput } from "../Components/LoginInput";
import { OTPInput } from "../Components/OTPInput";
import Title from "../Components/Title";
import { useAsync, useSingleAsync } from "@shared/hook/useAsync";
import authenticationPresenter from "@modules/authentication/presenter";
import { routerLogin } from "./router";
import { ButtonClose } from "../Components/ButtonClose";
import TextArea from "antd/lib/input/TextArea";
import modal from "antd/lib/modal";
const config = {
  width: "90%",
  title: <div>XIN CHÚC MỪNG</div>,
  content: (
    <div>
      Xin chúc mừng bạn đã đăng ký thành viên
      <span className="nuti-label"> Nutifood Ngôi nhà dinh dưỡng</span> thành
      công. Hãy tiếp tục trải nghiệm và thăm quan mua sắm nhé!
    </div>
  ),
  className: "main-modal",
  okText: "Xác nhận",
  cancelText: "Huỷ",
};
const Login: React.FC = () => {
  const history = useHistory();
  const params = useParams<{ step: string; phone: string }>();
  const [form] = Form.useForm();
  const { loginByOTPCode, verifyCode } = authenticationPresenter;
  const [loginByOTPCodeCall] = useAsync(loginByOTPCode);
  const [verifyCodeRepo] = useAsync(verifyCode);
  const [isWrongOTP, setIsWrongOTP] = useState<number | boolean>(false);
  const [otpCode, setOtpCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(undefined);
  const { formatMessage } = useAltaIntl();
  const { Option } = Select;
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmitMobilePhone = (values) => {
    loginByOTPCodeCall.execute(values).then((res) => {
      setPhoneNumber(values);
      history.push(
        generatePath(routerLogin.path, {
          step: "otp",
          phone: values?.playerPhone,
        })
      );
    });
  };

  const onLoginByOTP = () => {
    if (otpCode.length != 4) {
      message.error(formatMessage("auth.otp.not.enough"));
      return;
    }
    setIsWrongOTP(new Date().getTime());
    verifyCodeRepo
      .execute({ code: otpCode, phoneNumber: params.phone })
      .then((rs) => {
        modal.info(config);
      })
      .catch((err) => {
        setIsWrongOTP(true);
      });
  };

  return (
    <div className="login-page">
      <div className="main-card">
            <ButtonClose router={routerLogin.path}/>
            <Title />
            {params.step == "otp" ? (
              <OTPInput
                nameOTP={formatMessage("auth.login")}
                setOtpCode={setOtpCode}
                phoneNumber={phoneNumber}
                wrongOTP={isWrongOTP}
              />
            ) : (

              <Form className="main-form">
                 <LoginInput form={form} onFinish={onSubmitMobilePhone} />
                 
              </Form>
              
            )}
      </div>
      <ButtonSubmit
        form={form}
        inputOTP={params.step == "otp"}
        onFinish={onLoginByOTP}
        isLogin={true}
        loading={loginByOTPCodeCall.status == "loading" || verifyCodeRepo.status == "loading"}
      />
      
    </div>
  );
};

export default Login;
