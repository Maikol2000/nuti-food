import { IRouter } from "@routers/interface";
import React from "react";

export const routerDoorsOfTheStore: IRouter = {
  path: "/doors-store",
  loader: import("./index"),
  exact: true,
  name: "doorsOfTheStore.name",
  masterLayout: false,
};
