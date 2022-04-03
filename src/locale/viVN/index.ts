import viVN from "antd/lib/locale/vi_VN";
import server from "./server";
import router from "./router";
import common from "./common";
import rule from "./rule";
import auth from "./auth";
import profile from "./profile";
import bmi from "./bmi";
import question from "./question";
import error from "./PageNotFound";

export default {
  ...viVN,
  ...server,
  ...router,
  ...common,
  ...rule,
  ...auth,
  ...profile,
  ...bmi,
  ...question,
  ...error,
};
