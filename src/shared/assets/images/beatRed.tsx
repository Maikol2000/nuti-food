import React from "react";
import Icon from "@ant-design/icons";
const BeatRedSVG = () => (
    <svg
        width="3.7rem"
        height="3.7rem"
        viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.6858 0H8.85962C8.42563 0 8.00942 0.172402 7.70254 0.47928L0.47928 7.70254C0.172402 8.00942 0 8.42563 0 8.85962V33.6858C0 34.1198 0.172402 34.536 0.47928 34.8429L1.15708 35.5207C1.46396 35.8276 1.88018 36 2.31417 36H27.1404C27.5744 36 27.9906 35.8276 28.2975 35.5207L35.5207 28.2975C35.8276 27.9906 36 27.5744 36 27.1404V2.31417C36 1.88018 35.8276 1.46396 35.5207 1.15708L34.8429 0.47928C34.536 0.172402 34.1198 0 33.6858 0Z" fill="#ED1941" />
        <path d="M23.9339 15.5996C23.6089 15.5996 23.3505 15.858 23.3505 16.183V17.4996C23.3505 20.4496 20.9505 22.8496 18.0005 22.8496C15.0505 22.8496 12.6505 20.4496 12.6505 17.4996V16.1746C12.6505 15.8496 12.3922 15.5913 12.0672 15.5913C11.7422 15.5913 11.4839 15.8496 11.4839 16.1746V17.4913C11.4839 20.883 14.0922 23.6746 17.4172 23.9746V25.7496C17.4172 26.0746 17.6755 26.333 18.0005 26.333C18.3255 26.333 18.5839 26.0746 18.5839 25.7496V23.9746C21.9005 23.683 24.5172 20.883 24.5172 17.4913V16.1746C24.5089 15.858 24.2505 15.5996 23.9339 15.5996Z" fill="white" />
        <path d="M18.0004 9.6665C15.9671 9.6665 14.3171 11.3165 14.3171 13.3498V17.6165C14.3171 19.6498 15.9671 21.2998 18.0004 21.2998C20.0338 21.2998 21.6838 19.6498 21.6838 17.6165V13.3498C21.6838 11.3165 20.0338 9.6665 18.0004 9.6665ZM19.0921 15.4582C19.0338 15.6748 18.8421 15.8165 18.6254 15.8165C18.5838 15.8165 18.5421 15.8082 18.5004 15.7998C18.1754 15.7082 17.8338 15.7082 17.5088 15.7998C17.2421 15.8748 16.9838 15.7165 16.9171 15.4582C16.8421 15.1998 17.0004 14.9332 17.2588 14.8665C17.7504 14.7332 18.2671 14.7332 18.7588 14.8665C19.0088 14.9332 19.1588 15.1998 19.0921 15.4582ZM19.5338 13.8415C19.4588 14.0415 19.2754 14.1582 19.0754 14.1582C19.0171 14.1582 18.9671 14.1498 18.9088 14.1332C18.3254 13.9165 17.6754 13.9165 17.0921 14.1332C16.8421 14.2248 16.5588 14.0915 16.4671 13.8415C16.3754 13.5915 16.5088 13.3082 16.7588 13.2248C17.5588 12.9332 18.4421 12.9332 19.2421 13.2248C19.4921 13.3165 19.6254 13.5915 19.5338 13.8415Z" fill="white" />
    </svg>


);
const BeatRed = (props) => <Icon component={BeatRedSVG} {...props} />;
export default BeatRed;