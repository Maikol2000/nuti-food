import React from "react";
import { useAltaIntl } from "@shared/hook/useTranslate";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { routerLogin } from "../Login/router";
import { ButtonProps } from "../interface";

export const ButtonClose: React.FC<ButtonProps> = (props) => {
  const history = useHistory();
  return (
    <button
      aria-label="close"
      className="btn btn-close"
      onClick={() => history.push(props.router)}
    ></button>
  );
};
