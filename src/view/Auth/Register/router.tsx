import { IRouter } from "@routers/interface";
export const routerRegister: IRouter = {
  path: "/register/:step/:phone",
  loader: import("./index"),
  exact: true,
  name: "register.name", //translate here for breadcrumb and sidebar
};
