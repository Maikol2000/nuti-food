import React from "react";
import "./style.scss";
import light from "../../assets/images/light.png";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { noImage } from "@assets/images";
import { useAltaIntl } from "@shared/hook/useTranslate";

const ProductComponent = (props) => {
  const { formatMessage } = useAltaIntl();
  return (
    <div className="product">
      <div className="product-content">
        <p className="product-title">{formatMessage("bmi.productAdvise.title")}</p>
        <div className="product-img">
          <img src={light} alt="" className="product-img-1" />
          <img src={props.image || noImage} alt="product Image" className="product-img-2" />
        </div>
        <div className="product-wrap">
          <Button className="product-text">{formatMessage("bmi.productAdvise.detail")}</Button>
          <Button className="product-text">
            <Link to="#">{formatMessage("bmi.productAdvise.select")}</Link>
          </Button>
          <Button className="product-text">{formatMessage("bmi.productAdvise.hotline")}</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
