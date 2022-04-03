import HomeNavBar from "@shared/components/HomeNavBar";
import React, { PropsWithChildren } from "react";
import { ArrowLeft } from "react-feather";
import { useHistory } from "react-router-dom";
interface IHeader extends PropsWithChildren<any> {
  className?: string;
  canBack?: boolean;
  canHome?: boolean;
  toolbar?: React.ReactNode | undefined;
  goBack?: () => void;
}
const Header: React.FC<IHeader> = (props) => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className={"main-title " + (props.className || "")}>
      <div className="title-mobile">
        {props.canBack !== false && (
          <ArrowLeft
            className="nav-left"
            color="#ffffff"
            onClick={props.goBack || goBack}
          />
        )}
        {props.canHome === true && <HomeNavBar className="nav-left" />}
        {props.children}
        {props.toolbar && <div className="toolbar">{props.toolbar}</div>}
      </div>
    </div>
  );
};

export default React.memo(Header);
