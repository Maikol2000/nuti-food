import { IRouter } from "@routers/interface";

export const routerLogin: IRouter = {
  path: "/login/:step/:phone",
  loader: import("./index"),
  exact: false,
  name: "login.name", //translate here for breadcrumb and sidebar
};
export const routerHome: IRouter = {
  path: "/login/:step/:phone",
  loader: import("./index"),
  exact: false,
  name: "login.name", //translate here for breadcrumb and sidebar
};
export const routerRegister: IRouter = {
  path: "/Register/:step/:phone",
  loader: import("./index"),
  exact: false,
  name: "login.name", //translate here for breadcrumb and sidebar
};
