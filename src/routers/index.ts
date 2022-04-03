import Loading from "@shared/components/Loading";
import LoadableRouter from "./loadableRouter";
import {
  ModalPage,
  privatePage,
  publicPage,
} from "./mainRouter";

export const privateRouter = new LoadableRouter({
  loading: Loading,
  routers: privatePage,
}).routers;

export const publicRouter = new LoadableRouter({
  loading: Loading,
  routers: publicPage,
}).routers;

export const modalRouter = new LoadableRouter({
  loading: Loading,
  routers: ModalPage,
}).routers;