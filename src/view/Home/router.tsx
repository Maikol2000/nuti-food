import VideoIcon from "@assets/icon/VideoIcon";
import { IRouter } from "@routers/interface";
import React from "react";
export const routerHome: IRouter = {
  path: "/",
  loader: import("./index"),
  exact: true,
  name: "home.name",
  masterLayout: false,
};
export const routerHomePublic: IRouter = {
  path: "/",
  loader: import("./index"),
  exact: true,
  name: "login.name", //translate here for breadcrumb and sidebar
};
export const routerPageNotFound: IRouter = {
  path: "*",
  loader: import("./index"),
  exact: true,
  name: "login.name", //translate here for breadcrumb and sidebar
};
