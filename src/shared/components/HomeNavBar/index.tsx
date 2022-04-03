import React from "react";
import { useHistory } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { AntdIconProps } from "@ant-design/icons/lib/components/AntdIcon";
interface IHomeNavBar extends AntdIconProps {}
const HomeNavBar: React.FC<IHomeNavBar> = (props) => {
  const history = useHistory();
  return (
    <HomeOutlined
      className={`home-icon ${props.className}`}
      onClick={() => history.push("/")}
    />
  );
};
export default HomeNavBar;
