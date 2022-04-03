import React from "react";
import Icon from "@ant-design/icons";
const IconCloseSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.90641 0.272727H22.4572C22.6742 0.272727 22.8823 0.358929 23.0358 0.512367L23.2281 0.320079L23.0358 0.512367L23.4876 0.964237C23.6411 1.11768 23.7273 1.32578 23.7273 1.54278V18.0936C23.7273 18.3106 23.6411 18.5187 23.4876 18.6721L18.6721 23.4876C18.5187 23.6411 18.3106 23.7273 18.0936 23.7273H1.54278C1.32578 23.7273 1.11767 23.6411 0.964237 23.4876L0.512367 23.0358L0.31952 23.2286L0.512367 23.0358C0.358929 22.8823 0.272727 22.6742 0.272727 22.4572V5.90642C0.272727 5.68942 0.358928 5.48131 0.512367 5.32787L5.32787 0.512367C5.48131 0.358928 5.68942 0.272727 5.90641 0.272727Z"
      fill="white"
      fill-opacity="0.2"
      stroke="white"
      stroke-width="0.545455"
    />
    <path
      d="M16.0005 8L8.00046 16"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.00046 8L16.0005 16"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const IconClose = (props) => <Icon component={IconCloseSVG} {...props} />;
export default IconClose;
