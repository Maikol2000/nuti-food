import "./style.scss";
import React, { useState } from "react";
import { Col, Form, Input, message, Row } from "antd";
import { logoBrand, mainTitle } from "@assets/images";
import { generatePath, useHistory, useParams } from "react-router";
import { OTPInput } from "../Components/OTPInput";
import { ButtonSubmit } from "../Components/ButtonSubmit";
import { RegisterInput } from "../Components/RegisterInput";
import Title from "../Components/Title";
import authenticationPresenter from "@modules/authentication/presenter";
import authentication from "@modules/authentication/repository";
import { useAsync } from "@shared/hook/useAsync";
import { routerRegister } from "../Register/router";
import { useAltaIntl } from "@shared/hook/useTranslate";
import { routerLogin } from "../Login/router";
import { ButtonClose } from "../Components/ButtonClose";

const Register = () => {
  const { formatMessage } = useAltaIntl();
  const history = useHistory();
  const params = useParams<{ step: string; phone: string }>();
  const [form] = Form.useForm();
  const [otpCode, setOtpCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(undefined);
  const [isWrongOTP, setIsWrongOTP] = useState<number | boolean>(false);
  const { registerByOTPCode, verifyCode } = authenticationPresenter;
  const [registerByOTPCodeCall] = useAsync(registerByOTPCode);
  const [verifyCodeRepo] = useAsync(authentication.verifyCode);

  const onSubmitMobilePhone = (values) => {
    registerByOTPCodeCall.execute(values).then((res) => {
      history.push(
        generatePath(routerRegister.path, {
          step: "otp",
          phone: values.playerPhone,
        })
      );
    });
  };

  const onRegisterByOTP = () => {
    if (otpCode.length != 4) {
      message.error(formatMessage("auth.otp.not.enough"));
      return;
    }
    setIsWrongOTP(new Date().getTime());
    verifyCodeRepo
      .execute({ code: otpCode, phoneNumber: params.phone })
      .then((rs) => {
        message.success(formatMessage("auth.register.success"));
        history.push(routerLogin.path, { step: "form", phone: "000" });
      })
      .catch((err) => {
        setIsWrongOTP(true);
      });
  };

  return (
    <div className="login-page register-page">
      <div className="main-card">
          <Title />
          <ButtonClose router={routerRegister.path}/>

          {params.step == "otp" ? (
            <OTPInput
              nameOTP={formatMessage("auth.register")}
              setOtpCode={setOtpCode}
              phoneNumber={phoneNumber}
              wrongOTP={isWrongOTP}
            />
          ) : (
            <Form className="main-form">
                <RegisterInput form={form} onFinish={onSubmitMobilePhone} />
              </Form>
            
          )}
          
        </div>
        <ButtonSubmit
          form={form}
          inputOTP={params.step == "otp"}
          onFinish={onRegisterByOTP}
          isLogin={false}
          loading={registerByOTPCodeCall.status == "loading"}
        />
    
    </div>
    
  );
};

export default Register;
