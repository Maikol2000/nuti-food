import React from "react";
import Icon from "@ant-design/icons";
const remixpauseSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg"
        width="2.4rem"
        height="2.4rem"
        viewBox="0 0 24 24" fill="#ffff" stroke="#ffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-pause">
        <rect x="6" y="4" width="4" height="16">
        </rect><rect x="14" y="4" width="4" height="16">
        </rect>
    </svg>

);
const RemixPause = (props) => <Icon component={remixpauseSvg} {...props} />;
export default RemixPause;
