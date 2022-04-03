import TouchPoint from "@shared/components/TouchPoint";
import React from "react";
import "./style.scss";

function ProductFridgeSecond() {
  return (
    <div className="product-fridge-second">
      <TouchPoint link="" type="product" className="product1" />
      <TouchPoint link="" type="product" className="product2" />
    </div>
  );
}

export default ProductFridgeSecond;
