import React from "react";
import Icon from "@ant-design/icons";
const chartSvg = () => (
  <svg
    width="2.4rem"
    height="2.4rem"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.00002 22H22"
      stroke="white"
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.75002 4V22H14.25V4C14.25 2.9 13.8 2 12.45 2H11.55C10.2 2 9.75002 2.9 9.75002 4Z"
      stroke="white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.99998 10V22H6.99998V10C6.99998 8.9 6.59998 8 5.39998 8H4.59998C3.39998 8 2.99998 8.9 2.99998 10Z"
      stroke="white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 15V22H21V15C21 13.9 20.6 13 19.4 13H18.6C17.4 13 17 13.9 17 15Z"
      stroke="white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ChartIcon = (props) => <Icon component={chartSvg} {...props} />;
export default ChartIcon;
