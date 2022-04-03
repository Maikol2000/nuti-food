import { IRouter } from "@routers/interface";

export const routerPageNotFound: IRouter = {
  path: "*",
  loader: import("./index"),
  exact: false,
  name: "404.name",
};
