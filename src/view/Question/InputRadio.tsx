import React, { useState } from 'react';
import { useAltaIntl } from '@shared/hook/useTranslate';
import { Form, Radio, Space } from 'antd';

const InputRadio: React.FC = () => {
  const { formatMessage } = useAltaIntl();
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
  
        <Radio.Group className="radio" onChange={onChange} value={value}>
          <Space direction="vertical">
            <Radio value={1}>Hỏi đáp về sản phẩm</Radio>
            <Radio value={2}>Hỏi đáp về dinh dưỡng</Radio>
          </Space>
        </Radio.Group>

        

    
  );
};
export default InputRadio;