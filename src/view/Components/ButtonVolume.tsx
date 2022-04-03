import React from "react";
import "./styles.scss";
import * as Icon from "react-feather";
import { IButtonVolume } from "./interface";
const ButtonVolume: React.FC<IButtonVolume> = (props) => {
  return (
    <div className="button-icon__box">
      {props.isVolume ? <Icon.Volume2 /> : <Icon.VolumeX />}
    </div>
  );
};

export default ButtonVolume;
