import React from "react";
import Icon from "@ant-design/icons";
const playVideoSvg = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.54 6.00027L5.88 0.46027C5.35729 0.15843 4.764 0.000308135 4.16039 0.00196603C3.55679 0.00362392 2.96438 0.165002 2.44333 0.469709C1.92228 0.774417 1.49115 1.2116 1.19375 1.73685C0.896337 2.2621 0.743238 2.8567 0.750001 3.46027V14.5803C0.750001 15.4873 1.11032 16.3572 1.7517 16.9986C2.39307 17.6399 3.26296 18.0003 4.17 18.0003C4.77044 17.9993 5.36009 17.8406 5.88 17.5403L15.54 12.0003C16.0591 11.6999 16.49 11.2682 16.7896 10.7487C17.0892 10.2292 17.2469 9.63999 17.2469 9.04027C17.2469 8.44055 17.0892 7.85137 16.7896 7.33183C16.49 6.8123 16.0591 6.38068 15.54 6.08027V6.00027Z"
      fill="white"
    />
  </svg>
);
const PlayVideoIcon = (props) => <Icon component={playVideoSvg} {...props} />;
export default PlayVideoIcon;