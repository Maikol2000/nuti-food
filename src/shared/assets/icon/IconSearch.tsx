import React from "react";
import Icon from "@ant-design/icons";
const IconSearchSVG = () => (
    <svg
        width="2rem" height="2rem"
        viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.2198 19.7471C20.5127 19.4542 20.5127 18.9794 20.2198 18.6866L15.0861 13.5528C16.4472 11.9188 17.1259 9.82294 16.9811 7.70124C16.8363 5.57954 15.879 3.59535 14.3085 2.16145C12.738 0.727539 10.6751 -0.0456858 8.54906 0.00262291C6.42297 0.0509316 4.39736 0.917055 2.8936 2.42081C1.38984 3.92457 0.523717 5.95019 0.475408 8.07628C0.427099 10.2024 1.20032 12.2652 2.63423 13.8357C4.06814 15.4062 6.05232 16.3635 8.17402 16.5083C10.2957 16.6531 12.3916 15.9744 14.0256 14.6133L19.1593 19.7471C19.4522 20.0399 19.927 20.0399 20.2198 19.7471ZM2.00009 8.27731C2.00009 6.94228 2.39597 5.63724 3.13767 4.52721C3.87937 3.41718 4.93358 2.55201 6.16698 2.04112C7.40038 1.53023 8.75758 1.39656 10.067 1.65701C11.3763 1.91746 12.5791 2.56033 13.5231 3.50434C14.4671 4.44834 15.1099 5.65108 15.3704 6.96045C15.6308 8.26982 15.4972 9.62702 14.9863 10.8604C14.4754 12.0938 13.6102 13.148 12.5002 13.8897C11.3902 14.6314 10.0851 15.0273 8.75009 15.0273C6.96049 15.0253 5.24476 14.3135 3.97932 13.0481C2.71387 11.7826 2.00208 10.0669 2.00009 8.27731Z" fill="white" />
    </svg>
);
const IconSearch = (props) => <Icon component={IconSearchSVG} {...props} />;
export default IconSearch;