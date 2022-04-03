import React from 'react';
import { Collapse } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import "./style.scss"
import PanelArray from './Panel';
import { ICollapse } from './interfare';

const CollapseAnswer = ({ data }: ICollapse) => {
  return (
    <>
      <Collapse
        expandIconPosition={"right"}
        expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? -180 : 0} />}
        className="site-collapse-custom-collapse"
      >
        {PanelArray(data)}
      </Collapse>
    </>
  )
}
export default CollapseAnswer