import { IRouter } from "@routers/interface";
import React from "react";

export const routerShelfAndProduct: IRouter = {
  path: "/shelf-product",
  loader: import("./index"),
  exact: true,
  name: "ShelfAndProduct.name",
  masterLayout: false,
};
