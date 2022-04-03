import { ArrowLeftOutlined } from "@ant-design/icons";
import { Row, Col, Typography } from "antd";
import React, { ReactNode } from "react";
import { Header } from "@view/Components";
import { FormattedMessage } from "react-intl";
interface ITitle {
  title: string | any;
  iconRight?: ReactNode;
}
export const TitleMobile: React.FC<ITitle> = (props) => {
  return (
    <Header>
      <>
        <Typography.Text className="title-header"><FormattedMessage id={props.title} /></Typography.Text>
        {props.iconRight}
      </>
    </Header>
  );
};
