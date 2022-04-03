import { useAltaIntl } from '@shared/hook/useTranslate';
import { Form, Input } from 'antd';
import React from 'react';

const InputEmailPhone: React.FC = () => {
  const { formatMessage } = useAltaIntl();
  return (
    <Form.Item
      name="questionEmailPhone"
      rules={[
        {
          required: true,
          message: formatMessage('question.emailPhone.required'),
          whitespace: true,
        },
        {
          pattern:
            /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,3})$/,
          message: formatMessage('question.emailPhone.inValid'),
        },
      ]}
    >

        <Input placeholder={formatMessage('question.emailPhone.placeholder')} />
   

    </Form.Item>
  );
};
export default InputEmailPhone;