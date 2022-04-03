import { useAltaIntl } from "@shared/hook/useTranslate";
import { Form, Input } from "antd";
import React from "react";
const InputName: React.FC = () => {
  const { formatMessage } = useAltaIntl();
  return (
    <Form.Item
      name="questionName"
      rules={[
        {
          required: true,
          message: formatMessage("question.name.required"),
          whitespace: true,
        },
      ]}
    >

   
        <Input placeholder={formatMessage("question.name.placeholder")} />
       
    
   
    </Form.Item>
  );
};
export default InputName;
