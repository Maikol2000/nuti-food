import { mainTitle } from "@assets/images";
import { useAltaIntl } from "@shared/hook/useTranslate";
import { Form, Input } from "antd";
import React from "react";
const InputPhone: React.FC = () => {
  const { formatMessage } = useAltaIntl();
  return (

    <Form.Item
      name="playerPhone"
      rules={[
        {
          required: true,
          message: formatMessage("auth.login.mobilePhone.required"),
          whitespace: true,
          
        },
        {
          pattern:
            /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
          message: formatMessage("auth.login.mobilePhone.inValid"),
        },
      ]}
    >

            <Input type="number"  placeholder={formatMessage("auth.login.mobilePhone.placeholder")}/>
      
     
  
    </Form.Item>


    
  );
};
export default InputPhone;
