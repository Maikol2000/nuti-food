import React from "react";
import Icon from "@ant-design/icons";
const videoSvg = () => (
  <svg
    width="2.4rem"
    height="2.4rem"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.00002 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9.00002C4.00002 2 2.00002 4 2.00002 9V15C2.00002 20 4.00002 22 9.00002 22Z"
      stroke="white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.09999 12V10.52C9.09999 8.60999 10.45 7.83999 12.1 8.78999L13.38 9.52999L14.66 10.27C16.31 11.22 16.31 12.78 14.66 13.73L13.38 14.47L12.1 15.21C10.45 16.16 9.09999 15.38 9.09999 13.48V12Z"
      stroke="white"
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const VideoIcon = (props) => <Icon component={videoSvg} {...props} />;
export default VideoIcon;
