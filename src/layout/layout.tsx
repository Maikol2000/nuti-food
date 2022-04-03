import React, { PropsWithChildren } from "react";
import { withRouter } from "react-router-dom";
interface IDefaultLayoutProps {
  history: any;
}

const Layout: React.FC<PropsWithChildren<IDefaultLayoutProps>> = (props) => {
  return <div className="all-page-component">{props.children}</div>;
};

export default React.memo(withRouter(Layout));
