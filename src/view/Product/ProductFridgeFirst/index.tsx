import { dacTri } from "@assets/images";
import TouchPoint from "@shared/components/TouchPoint";
import React from "react";
import "./style.scss";

function ProductFridgeFirst() {
  return (
    <div className="product-fridge-first">
      <TouchPoint link="" type="product" className="product1" />
      <TouchPoint link="" type="product" className="product2" />
      <TouchPoint link="" type="product" className="product3" />
      <TouchPoint link="" type="product" className="product4" />
      <TouchPoint link="" type="product" className="product5" />
      <TouchPoint link="" type="product" className="product6" />
    </div>
  );
}

export default ProductFridgeFirst;
