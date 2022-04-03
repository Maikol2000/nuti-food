import CONFIG from "@config";
import authenticationPresenter from "@modules/authentication/presenter";
import { useAltaIntl } from "@shared/hook/useTranslate";
import React, { Component, useEffect, useState } from "react";
import { FormattedMessage, FormattedRelativeTime } from "react-intl";
import OtpInput from "react-otp-input";
import { useParams } from "react-router-dom";
interface IPropsOTPInput {
  nameOTP: string;
  setOtpCode: any;
  phoneNumber: number | undefined;
  wrongOTP: boolean|number;
  // nameOTP: string;
}
export const OTPInput: React.FC<IPropsOTPInput> = (props) => {
  const { formatMessage } = useAltaIntl();
  const NUM_INPUTS = 4;
  const [otp, setOtp] = useState<string>("");
  const [canSendOTP, setCanSendOTP] = useState<boolean>(false);
  const [wrongOTP,setWrongOTP]= useState<boolean>(true);
  const params = useParams<{phone:string}>()
  const handleChange = (otp) => setOtp(otp);
  useEffect(() => {
    if (otp.length == NUM_INPUTS) {
      props.setOtpCode(otp||"");
      setWrongOTP(false)
    }else{
      props.setOtpCode("");
      setWrongOTP(true)
    }
  }, [otp]);


  useEffect(() => {
    if(props.wrongOTP===true){
      setWrongOTP(true)
    }
  }, [props.wrongOTP]);

  useEffect(() => {
    let timeOut: any = undefined;
    if (!canSendOTP) {
      timeOut = setTimeout(() => {
        setCanSendOTP(true)
      }, CONFIG.OTP_TIMEOUT * 1000)
    }
    return () => {
      if (timeOut != null)
        clearTimeout(timeOut)
    }
  }, [canSendOTP]);

  const reSendOTP = () => {
    if (canSendOTP) {
      authenticationPresenter.resendOtp(params.phone).then(rs=>{
        setCanSendOTP(false)
      });
    }
  };
  return (
    <>
      <h2 className="login-title login-title-no-margin">
        {props.nameOTP}
      </h2>
      <p className="login-description login-description-top ">
        {formatMessage("auth.otp.message.input")}
      </p>
      <div className="login-otp ">
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={NUM_INPUTS}
          isInputNum={true}
          containerStyle="input-otp-box"
          inputStyle="input-otp-item"
          errorStyle="input-otp-item-error"
          hasErrored={wrongOTP}
        />
      </div>

      <span className="login-description">
        {(canSendOTP) ? <p onClick={reSendOTP}>
          <span>
            {formatMessage("auth.otp.resend.notification")}
          </span>
          <br/>
          <span className="login-description-bold">
            {formatMessage("auth.otp.resend")}
          </span>
        </p> : <>
          <span>
            {formatMessage("auth.otp.notification")}
          </span>
          <br />
          <span className="login-description-bold">
            <FormattedRelativeTime value={CONFIG.OTP_TIMEOUT} numeric="auto" updateIntervalInSeconds={1} />
          </span>
        </>}
      </span>

    </>
  );
};
