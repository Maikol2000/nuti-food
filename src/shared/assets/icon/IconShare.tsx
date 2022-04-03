import React from "react";
import Icon from "@ant-design/icons";
const IconShareSVG = () => (
    <svg
        width="1.6rem"
        height="1.4rem"
        viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.53444 3.6185V0L13.4004 3.93537L16.5 7.09068L13.3453 9.76693L9.53444 13V9.45926C2.84403 8.94591 0.499999 12.8871 0.499999 12.8871C0.499999 10.4316 0.698756 7.88327 2.59517 5.95363C4.79957 3.70879 7.99202 3.54994 9.53444 3.6185Z" fill="#C2C9D1" />
        <path d="M9.53444 3.6185V0L13.4004 3.93537L16.5 7.09068L13.3453 9.76693L9.53444 13V9.45926C2.84403 8.94591 0.499999 12.8871 0.499999 12.8871C0.499999 10.4316 0.698756 7.88327 2.59517 5.95363C4.79957 3.70879 7.99202 3.54994 9.53444 3.6185Z" fill="white" fillOpacity="0.9" />
    </svg>
);
const IconShare = (props) => <Icon component={IconShareSVG} {...props} />;
export default IconShare;