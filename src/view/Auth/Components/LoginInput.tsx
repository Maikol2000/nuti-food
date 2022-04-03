import { useAltaIntl } from "@shared/hook/useTranslate";
import InputDropdown from "@view/Bmi/InputDropdown";
import InputHeight from "@view/Bmi/InputHeight";
import InputContent from "@view/Question/InputContent";
import InputRadio from "@view/Question/InputRadio";
import { Form, Input, Select } from "antd";
import React from "react";
import { IPropsMobilePhoneInput } from "../interface";
import InputName from "./InputName";
import InputPhone from "./InputPhone";
const { Option } = Select;
export const LoginInput: React.FC<IPropsMobilePhoneInput> = (props) => {
  const { formatMessage } = useAltaIntl();
  return (
    <>
      <h2 className="login-title">{formatMessage("auth.login")}</h2>
      <Form className="main-form" name="login-form" form={props.form} onFinish={props.onFinish}>

        <InputPhone />
        
     

      </Form>
    </>
  );
};
