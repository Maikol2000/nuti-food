import { useAltaIntl } from "@shared/hook/useTranslate";
import { Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
const InputName: React.FC = () => {
  const { formatMessage } = useAltaIntl();
  return (
    <Form.Item
      name="questionContent"
      rules={[
        {
          required: true,
          message: formatMessage("question.content.required"),
          whitespace: true,
        },
      ]}
    >

          <TextArea placeholder={formatMessage("question.content.placeholder")} />

        

    </Form.Item>
  );
};
export default InputName;
