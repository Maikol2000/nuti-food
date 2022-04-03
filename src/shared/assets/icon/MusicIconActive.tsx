import React from "react";
import Icon from "@ant-design/icons";
const musicSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.2427 13.998L19.917 14.5286V13.6706V7.72056V7.16883L19.3863 7.31979L10.1763 9.93979L9.87369 10.0259V10.3406V18.4106C9.87369 20.1597 8.44099 21.5839 6.70035 21.5839C4.95047 21.5839 3.52702 20.1604 3.52702 18.4106C3.52702 16.6714 4.94971 15.2472 6.70035 15.2472C7.42986 15.2472 8.09191 15.5014 8.63604 15.9206L9.30702 16.4376V15.5906V6.75056C9.30702 5.47165 10.068 4.49457 11.2988 4.16287L11.3002 4.16248L17.0802 2.58248L17.0803 2.58246C18.1768 2.28256 19.0159 2.40854 19.5759 2.84047L19.5758 2.84051L19.5811 2.84445C20.1456 3.26581 20.4737 4.01217 20.4737 5.18056V16.4806C20.4737 18.2304 19.0502 19.6539 17.3004 19.6539C15.5597 19.6539 14.127 18.2297 14.127 16.4806C14.127 14.7422 15.559 13.3172 17.3004 13.3172C18.0402 13.3172 18.7007 13.5715 19.2427 13.998Z"
      fill="white"
      stroke="white"
      strokeWidth="0.833333"
    />
  </svg>
);
const MusicActive = (props) => <Icon component={musicSvg} {...props} />;
export default MusicActive;
