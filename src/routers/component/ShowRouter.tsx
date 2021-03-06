import React, { PropsWithChildren } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@modules";
import { IRouter } from "@routers/interface";

interface IShowRouter {
  routers: IRouter[];
  MasterLayout?: React.FC<PropsWithChildren<any>>;
}

const ShowRouter = ({ routers, MasterLayout }: IShowRouter) => {
  const listPermissionCode = useSelector(
    (state: RootState) => state.profile.listPermissionCode
  );
  const pages = React.useMemo(() => {
    return routers
      .map((router: IRouter, index) => {
        if (!MasterLayout || router.masterLayout === false)
          return (
            <Route
              key={router.path}
              path={router.path}
              exact={router.exact}
              component={router.component}
            />
          );
        //@ts-ignore
        const DynamicComponent: React.FC<any> = router.component;
        return (
          <Route
            key={router.path}
            path={router.path}
            exact={router.exact}
            component={() => (
              <MasterLayout>
                <DynamicComponent />
              </MasterLayout>
            )}
          />
        );
      });
  }, [routers, listPermissionCode, MasterLayout]);
  return pages;
};

export default ShowRouter;
