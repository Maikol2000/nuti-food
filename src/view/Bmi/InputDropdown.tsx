import { useAltaIntl } from '@shared/hook/useTranslate';
import { Form, Input, Select} from 'antd';
import React, { useState } from 'react';

const InputDropdown: React.FC = () => {
  const { formatMessage } = useAltaIntl();
  const { Option } = Select;
  return (
  
      <Select
          placeholder={formatMessage("bmi.dropdown.placeholder")}  
        >
          <Option value="1">Ông/bà tôi</Option>
          <Option value="2">Ba/mẹ tôi</Option>
          <Option value="3">Con tôi</Option>
          <Option value="4">Tôi</Option>
          <Option value="5">Khác</Option>
        </Select>

  );
};
export default InputDropdown;