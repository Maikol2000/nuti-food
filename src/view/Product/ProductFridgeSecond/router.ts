import { IRouter } from "@routers/interface";

export const routerProductFridgeSecond: IRouter = {
  path: "/productfridgesecond",
  loader: import("./index"),
  exact: true,
  name: "view.name", //translate here for breadcrumb and sidebar
};
