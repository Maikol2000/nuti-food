import { useAltaIntl } from "@shared/hook/useTranslate";
import { Form, Input } from "antd";
import React from "react";
const InputAge: React.FC = () => {
  const { formatMessage } = useAltaIntl();
  return (
    <Form.Item
      name="bmiAge"
      rules={[
        {
          required: true,
          message: formatMessage("bmi.age.required"),
          whitespace: true,
        },
        {
          pattern:
            /^(0|[1-9][0-9]*)$/,
          message: formatMessage("bmi.age.inValid"),
        },
      ]}
    >
   
        <Input placeholder={formatMessage("bmi.age.placeholder")} />

    </Form.Item>
  );
};
export default InputAge;
