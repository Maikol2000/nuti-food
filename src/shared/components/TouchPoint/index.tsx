import { touchPoint360, touchPointProduct } from "@assets/images";
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

interface ITouchPointProps {
  link?: string;
  type: "product" | "360";
  className?: string;
  onClick?: () => void;
}

const TouchPoint = forwardRef(
  ({ link, type, className, onClick }: ITouchPointProps, ref) => {
    return (
      <div>
        {link ? (
          <Link to={link} ref={ref} className={className} onClick={onClick}>
            <img
              src={type === "360" ? touchPoint360 : touchPointProduct}
              alt=""
              style={type === "product" ? { width: 24 } : { width: 38 }}
            />
          </Link>
        ) : (
          <div
            ref={ref}
            className={className}
            onClick={onClick}
            style={{ cursor: "pointer" }}
          >
            <img
              src={type === "360" ? touchPoint360 : touchPointProduct}
              alt=""
              style={type === "product" ? { width: 24 } : { width: 38 }}
            />
          </div>
        )}
      </div>
    );
  }
);

export default TouchPoint;
