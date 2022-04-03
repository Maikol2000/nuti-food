import React from "react";
import Icon from "@ant-design/icons";
const videoSvg = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.1903 0.000244141H5.81033C2.17033 0.000244141 0.000325203 2.17024 0.000325203 5.81024V14.1802C0.000325203 17.8302 2.17033 20.0002 5.81033 20.0002H14.1803C17.8203 20.0002 19.9903 17.8302 19.9903 14.1902V5.81024C20.0003 2.17024 17.8303 0.000244141 14.1903 0.000244141ZM12.6603 11.7302L11.3803 12.4702L10.1003 13.2102C8.45033 14.1602 7.10033 13.3802 7.10033 11.4802V10.0002V8.52025C7.10033 6.61025 8.45033 5.84024 10.1003 6.79025L11.3803 7.53024L12.6603 8.27025C14.3103 9.22025 14.3103 10.7802 12.6603 11.7302Z"
      fill="white"
    />
  </svg>
);
const VideoActive = (props) => <Icon component={videoSvg} {...props} />;
export default VideoActive;
