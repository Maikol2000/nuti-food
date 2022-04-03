import React from "react";
import Icon from "@ant-design/icons";
const remixplaySvg = () => (
    <svg
        width="2.4rem"
        height="2.4rem"
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.60392 2.38288C7.6582 1.28211 5.25 2.68619 5.25 4.92023V19.0794C5.25 21.3135 7.65986 22.7184 9.60475 21.6168L22.1015 14.5338C24.0739 13.4172 24.0731 10.5757 22.1015 9.45914L9.60308 2.38288H9.60392Z" fill="white" />
    </svg>


);
const RemixPlay = (props) => <Icon component={remixplaySvg} {...props} />;
export default RemixPlay;
