import { useAltaIntl } from "@shared/hook/useTranslate";
import { Form, Input } from "antd";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IPropsMobilePhoneInput } from "../interface";
import InputName from "./InputName";
import InputPhone from "./InputPhone";

export const RegisterInput: React.FC<IPropsMobilePhoneInput> = (props) => {
  const { formatMessage } = useAltaIntl();
  useEffect(() => {
    props.form.setFieldsValue({
      termsOfUse: true,
    });
  }, []);

  return (
    <>
      <h2 className="login-title">{formatMessage("auth.register")}</h2>
      <Form name="register-form" form={props.form} onFinish={props.onFinish}>
       
        <InputName />
        <InputPhone />


      
      </Form>
    </>
  );
};
