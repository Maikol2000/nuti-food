import { useAltaIntl } from "@shared/hook/useTranslate";
import { Form, Input } from "antd";
import React from "react";
const InputWeight: React.FC = () => {
  const { formatMessage } = useAltaIntl();
  return (
    <Form.Item
      name="bmiWeight"
      rules={[
        {
          required: true,
          message: formatMessage("bmi.weight.required"),
          whitespace: true,
        },
        {
          pattern:
            /^(0|[1-9][0-9]*)$/,
          message: formatMessage("bmi.weight.inValid"),
        },
      ]}
    >

 
          <Input placeholder={formatMessage("bmi.weight.placeholder")} />
          <span>kg</span>
     
    </Form.Item>
  );
};
export default InputWeight;
