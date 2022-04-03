import { IRouter } from "@routers/interface";

export const routerProductChild6to12: IRouter = {
  path: "/productchild6to12",
  loader: import("./index"),
  exact: true,
  name: "view.name", //translate here for breadcrumb and sidebar
};
