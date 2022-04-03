import PublicLayout from "@layout/public";
import React, { useEffect } from "react";
import { Switch, useHistory, useLocation } from "react-router-dom";
import { publicRouter } from "../index";
import ShowRouter from "./ShowRouter";
import { RootState } from "@modules";
import { Selector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import settingStore from "@modules/setting/settingStore";

interface IPublicPageSelector {
  pages: any[];
}

const PublicPageSelector: Selector<RootState, IPublicPageSelector> = (
  state: RootState
) => {
  return {
    pages: state.settingStore.pages,
  };
};

const _RouterView: React.FC<{ modalRouter: any; location?: any }> = ({
  modalRouter,
  location,
}) => {
  return (
    <Switch location={location}>
      {ShowRouter({ routers: modalRouter, MasterLayout: PublicLayout })}
    </Switch>
  );
};
const RouterView = React.memo(_RouterView);

const PublicPage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation<{ isShowModal: any; isShowModalLevel2: any }>();
  const { pages } = useSelector(PublicPageSelector);

  useEffect(() => {
    const unListen = history.listen((_location: any, action) => {
      if (action == "POP") {
        dispatch(settingStore.actions.pullPage());
      } else if (action == "PUSH") {
        if (_location.state?.isShowModal != null) {
          dispatch(settingStore.actions.pushPage(_location.state?.isShowModal));
        } else {
          dispatch(settingStore.actions.cleanHistory());
        }
      }
    });
    return () => {
      if (unListen) {
        unListen();
      }
    };
  }, []);

  return (
    <>
      {pages?.map((page, index) => {
        return (
          <div
            className={index != 0 ? "display-view__box" : ""}
            key={page?.pathname || location.pathname}
          >
            <RouterView
              modalRouter={publicRouter}
              location={page || location}
            />
          </div>
        );
      })}
    </>
  );
};
export default PublicPage;
