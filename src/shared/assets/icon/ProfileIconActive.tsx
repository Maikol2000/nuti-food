import React from "react";
import Icon from "@ant-design/icons";
const profileSvg = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5 2C9.88 2 7.75 4.13 7.75 6.75C7.75 9.32 9.76 11.4 12.38 11.49C12.46 11.48 12.54 11.48 12.6 11.49C12.62 11.49 12.63 11.49 12.65 11.49C12.66 11.49 12.66 11.49 12.67 11.49C15.23 11.4 17.24 9.32 17.25 6.75C17.25 4.13 15.12 2 12.5 2Z"
      fill="white"
    />
    <path
      d="M17.58 14.1499C14.79 12.2899 10.24 12.2899 7.43002 14.1499C6.16002 14.9999 5.46002 16.1499 5.46002 17.3799C5.46002 18.6099 6.16002 19.7499 7.42002 20.5899C8.82002 21.5299 10.66 21.9999 12.5 21.9999C14.34 21.9999 16.18 21.5299 17.58 20.5899C18.84 19.7399 19.54 18.5999 19.54 17.3599C19.53 16.1299 18.84 14.9899 17.58 14.1499Z"
      fill="white"
    />
  </svg>
);
const ProfileIconActive = (props) => <Icon component={profileSvg} {...props} />;
export default ProfileIconActive;
