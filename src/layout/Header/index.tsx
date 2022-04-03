import React, { memo } from "react";
import { useLocation } from "react-router-dom";

const HeaderComponent = () => {
  const location = useLocation();
  return (
    <div className="header-component">
    </div>
  );
};

export default memo(HeaderComponent);
