import { IRouter } from "@routers/interface";

export const routerView360: IRouter = {
  path: "/view360",
  loader: import("./index"),
  exact: true,
  name: "view.name", //translate here for breadcrumb and sidebar
};
