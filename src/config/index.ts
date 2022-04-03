import ISelect from "@core/select";

export const LANGUAGE: ISelect[] = [
  { value: "en", label: "ENG" },
  { value: "vi", label: "VNM" },
];

const devConfig ={
  API_BASE_URL: "https://pepsi-music-api.dev-altamedia.com/",
  APP_NAME: "pepsi-music",
  LOGIN_PAGE: "/#",
  SSO_PAGE: "/#",
  OTP_TIMEOUT: 180,
  S3_BASE_URL:"https://file.dev-altamedia.com/pepsi/"
}
const prodConfig ={
  API_BASE_URL: "https://pepsi-music-api.altacloud.biz/",
  APP_NAME: "pepsi-music",
  LOGIN_PAGE: "/#",
  SSO_PAGE: "/#",
  OTP_TIMEOUT: 180,
  S3_BASE_URL:"https://file.altacloud.biz/pepsi/"
}
const CONFIG = prodConfig;

export default CONFIG;
// https://pepsi-music-api.dev-altamedia.com/api/Players/Login
