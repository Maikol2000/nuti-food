import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import "./style.scss";
import logo from "@shared/assets/images/logo-desk.png";
import { useAltaIntl } from "@shared/hook/useTranslate";

const PageNotFound = () => {
  const history = useHistory();
  const { formatMessage } = useAltaIntl();
  return (
    <div className="bg-404">
      <div className="logo-404">
        <img src={logo} alt="logo" className="logo-err" />
      </div>
      <div className="content-err">
        <span>OOPS!</span>
      </div>
      <div className="footer-err">
        <div>
          <div className="sub-content-err">
            {formatMessage("error.notfound")}
          </div>
          <div className="btn-err">
            <Button type="primary" onClick={() => history.push("/")}>
              {formatMessage("error.btn")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
