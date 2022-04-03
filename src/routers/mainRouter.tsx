import { routerLogin } from "@view/Auth/Login/router";
import { routerRegister } from "@view/Auth/Register/router";

import { routerDetailProduct } from "@view/DetailProduct/router";
import { routerDoorsOfTheStore } from "@view/DoorsOfTheStore/router";
import { routerPageNotFound } from "@view/PageNotFound/router";
import { routerShelfAndProduct } from "@view/ShelfAndProduct/router";
import { routerHome, routerHomePublic } from "src/view/Home/router";

import { IRouter } from "./interface";

export const privatePage: IRouter[] = [
  routerHome,
  routerPageNotFound,
];

export const publicPage: IRouter[] = [
  routerHomePublic,
  routerDoorsOfTheStore,
  routerDetailProduct,
  routerShelfAndProduct,
  routerLogin,
  routerRegister,
  routerPageNotFound,
];
