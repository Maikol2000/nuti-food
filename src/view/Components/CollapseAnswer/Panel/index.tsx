import React from 'react'
import { Collapse } from 'antd';
import ScrollContainer from 'react-indiana-drag-scroll';
import { IPanel } from '../interfare';
const { Panel } = Collapse;
const PanelArray = ( arrayPanel: Array<IPanel>) => {

  return arrayPanel.map((item, index) => {
    return (
      <Panel header={item.header} key={index} className="site-collapse-custom-panel">
        <ScrollContainer horizontal={false} className="scroll-container">
          {item.textContent}
        </ScrollContainer>
      </Panel>
    )
  })
}
export default PanelArray