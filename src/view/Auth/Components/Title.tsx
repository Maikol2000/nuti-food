import { mainTitle } from "@assets/images";
import { useAltaIntl } from "@shared/hook/useTranslate";
import React from "react";
const Title: React.FC = () => {
  const { formatMessage } = useAltaIntl();
  return (
    <div className="title">
      <p>{formatMessage("auth.title.main")}</p>
    
    </div>
  );
};
export default Title;
