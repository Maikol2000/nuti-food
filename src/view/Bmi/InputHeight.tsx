import { useAltaIntl } from "@shared/hook/useTranslate";
import { Form, Input } from "antd";
import React from "react";
const InputHeight: React.FC = () => {
  const { formatMessage } = useAltaIntl();
  return (
    <Form.Item
      name="bmiHeight"
      rules={[
        {
          required: true,
          message: formatMessage("bmi.height.required"),
          whitespace: true,
        },
        {
          pattern:
            /^(0|[1-9][0-9]*)$/,
          message: formatMessage("bmi.height.inValid"),
        },
      ]}
    >

        <Input type="number" placeholder={formatMessage("bmi.height.placeholder")} />
        <span className="text-content">cm</span>

    
  
    </Form.Item>
  );
};
export default InputHeight;
