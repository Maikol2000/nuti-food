import { IRouter } from "@routers/interface";

export const routerProductChild0to6: IRouter = {
  path: "/productchild0to6",
  loader: import("./index"),
  exact: true,
  name: "view.name", //translate here for breadcrumb and sidebar
};
