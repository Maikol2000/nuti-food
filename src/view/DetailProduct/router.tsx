import { IRouter } from "@routers/interface";
import React from "react";

export const routerDetailProduct: IRouter = {
  path: "/doors-store/:id",
  loader: import("./index"),
  exact: true,
  name: "DetailProduct.name",
  masterLayout: false,
};
