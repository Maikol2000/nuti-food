import React from "react";
import Icon from "@ant-design/icons";
const IconMusicSVG = () => (
    <svg
        width="2.4rem"
        height="2.4rem"
        viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.6283 13.7716L19.4375 14.4083V13.3786V6.6849V6.02282L18.8007 6.20398L8.43944 9.15148L8.07625 9.25479V9.6324V18.7111C8.07625 20.6616 6.47851 22.2499 4.5375 22.2499C2.58614 22.2499 0.998749 20.6625 0.998749 18.7111C0.998749 16.7719 2.58523 15.1836 4.5375 15.1836C5.35066 15.1836 6.08886 15.4669 6.69608 15.9347L7.50125 16.5551V15.5386V5.59365C7.50125 4.1692 8.34768 3.08221 9.71886 2.71267L9.72059 2.7122L16.2231 0.9347L16.2232 0.934682C17.4512 0.5988 18.384 0.741724 19.0033 1.21954L19.0033 1.21959L19.0097 1.22432C19.6338 1.6902 20.0012 2.51833 20.0012 3.82739V16.5399C20.0012 18.4913 18.4139 20.0786 16.4625 20.0786C14.5215 20.0786 12.9237 18.4903 12.9237 16.5399C12.9237 14.6016 14.5206 13.0124 16.4625 13.0124C17.2873 13.0124 18.0236 13.2958 18.6283 13.7716Z" fill="white" stroke="white" />
    </svg>

);
const IconMusic = (props) => <Icon component={IconMusicSVG} {...props} />;
export default IconMusic;