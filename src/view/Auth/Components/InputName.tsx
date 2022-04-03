import { useAltaIntl } from "@shared/hook/useTranslate";
import { Form, Input } from "antd";
import React from "react";
const InputName: React.FC = () => {
  const { formatMessage } = useAltaIntl();
  return (
    <Form.Item
      name="PlayerName"
      rules={[
        {
          required: true,
          message: formatMessage("auth.username.required"),
          whitespace: true,
        },
      ]}
    >
      <Input.Group>
        <Input placeholder={formatMessage("auth.username.placeholder")} />
      
      </Input.Group>
    
   
    </Form.Item>
  );
};
export default InputName;
