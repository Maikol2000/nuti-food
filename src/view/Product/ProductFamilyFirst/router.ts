import { IRouter } from "@routers/interface";

export const routerProductFamilyFirst: IRouter = {
  path: "/productfamilyfirst",
  loader: import("./index"),
  exact: true,
  name: "view.name", //translate here for breadcrumb and sidebar
};
