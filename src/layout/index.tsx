import React, { PropsWithChildren } from "react";
import { withRouter } from "react-router";
interface IDefaultLayoutProps {
  history: any;
}

const DefaultLayout: React.FC<PropsWithChildren<IDefaultLayoutProps>> = (
  props
) => {
  return <div className="all-page-component">{props.children}</div>;
};

export default React.memo(withRouter(DefaultLayout));
