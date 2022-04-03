import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Switch, useLocation } from "react-router-dom";
import { Selector } from "@reduxjs/toolkit";
import config from "@config/index";
import { RootState } from "@modules";
import { removeProfile } from "@modules/authentication/profileStore";
import authenticationPresenter from "@modules/authentication/presenter";
import UserEntity from "@modules/user/entity";
import settingStore from "@modules/setting/settingStore";
import DefaultLayout from "src/layout/index";
import ShowRouter from "./ShowRouter";
import { privateRouter } from "../index";

interface IPrivatePageSelector {
  token?: string;
  statusLogin?: boolean;
  remember?: boolean;
  pages: any[];
}

const PrivatePageSelector: Selector<RootState, IPrivatePageSelector> = (
  state: RootState
) => {
  return {
    token: state.profile.token,
    statusLogin: state.profile.statusLogin,
    remember: state.profile.remember,
    pages: state.settingStore.pages,
  };
};

const _RouterView: React.FC<{ modalRouter: any; location?: any }> = ({
  modalRouter,
  location,
}) => {
  return (
    <Switch location={location}>
      {ShowRouter({ routers: modalRouter, MasterLayout: DefaultLayout })}
    </Switch>
  );
};
const RouterView = React.memo(_RouterView);

const PrivatePage: React.FC = () => {
  const history = useHistory();
  const location = useLocation<{ isShowModal: any }>();
  const dispatch = useDispatch();
  const { token, pages } = useSelector(PrivatePageSelector);
  useEffect(() => {
    if (token) {
      authenticationPresenter
        .getProfile()
        .then((user: UserEntity) => {})
        .catch((err) => {
          dispatch(removeProfile());
        });
    } else {
      window.location.href = config.LOGIN_PAGE;
    }
  }, [token]);
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
              modalRouter={privateRouter}
              location={page || location}
            />
          </div>
        );
      })}
    </>
  );
};
export default PrivatePage;
