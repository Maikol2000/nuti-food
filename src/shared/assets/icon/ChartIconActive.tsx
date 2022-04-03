import React from "react";
import Icon from "@ant-design/icons";
const chartSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 21.5833H2C1.82012 21.5833 1.66667 21.4299 1.66667 21.25C1.66667 21.0701 1.82012 20.9167 2 20.9167H22C22.1799 20.9167 22.3333 21.0701 22.3333 21.25C22.3333 21.4299 22.1799 21.5833 22 21.5833Z"
      fill="white"
      stroke="white"
      strokeWidth="0.833333"
    />
    <path
      d="M9.75 4V22H14.25V4C14.25 2.9 13.8 2 12.45 2H11.55C10.2 2 9.75 2.9 9.75 4Z"
      fill="white"
    />
    <path
      d="M2.99997 10V22H6.99997V10C6.99997 8.9 6.59997 8 5.39997 8H4.59997C3.39997 8 2.99997 8.9 2.99997 10Z"
      fill="white"
    />
    <path
      d="M17 15V22H21V15C21 13.9 20.6 13 19.4 13H18.6C17.4 13 17 13.9 17 15Z"
      fill="white"
    />
  </svg>
);
const ChartIconActive = (props) => <Icon component={chartSvg} {...props} />;
export default ChartIconActive;
