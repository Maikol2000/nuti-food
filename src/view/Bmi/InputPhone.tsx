import { mainTitle } from "@assets/images";
import { useAltaIntl } from "@shared/hook/useTranslate";
import { Form, Input } from "antd";
import React from "react";
const InputPhone: React.FC = () => {
  const { formatMessage } = useAltaIntl();
  return (
    <Form.Item
      name="bmiPhone"
      rules={[
        {
          required: true,
          message: formatMessage("bmi.phone.required"),
        },
        {
          pattern:
            /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
          message: formatMessage("bmi.phone.inValid"),
        },
      ]}
    >
    

          <Input placeholder={formatMessage("bmi.phone.placeholder")}/>
   
    </Form.Item>
  );
};
export default InputPhone;
