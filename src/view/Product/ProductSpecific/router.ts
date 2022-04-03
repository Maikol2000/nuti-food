import { IRouter } from "@routers/interface";

export const routerProducSpecific: IRouter = {
  path: "/producspecific",
  loader: import("./index"),
  exact: true,
  name: "view.name", //translate here for breadcrumb and sidebar
};
