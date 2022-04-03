import { useAltaIntl } from "@shared/hook/useTranslate";
import { Button, Col, FormInstance, Row } from "antd";
import React from "react";
import { generatePath, useHistory } from "react-router";
import { IButtonSubmit } from "../interface";
import { routerLogin } from "../Login/router";
import { routerRegister } from "../Register/router";

export const ButtonSubmit: React.FC<IButtonSubmit> = (props) => {
  const history = useHistory();
  const { formatMessage } = useAltaIntl();
  return (
    <div className="login-button">
      {props.inputOTP ? (
        <Button
          className="button-pepsi button-confirm"
          htmlType="submit"
          onClick={() => props.onFinish()}
        >
          {formatMessage("common.accept")}
        </Button>
      ) : (
        <>
          <Button
            className="button-pepsi button-confirm"
            htmlType="submit"
            loading={props.loading}
            onClick={() => props.form.submit()}
          >
            {formatMessage(props.isLogin ? "auth.login" : "auth.register")}
          </Button>
          <Row className="login-method">
            <Col span={10}>
              <hr />
            </Col>
            <Col span={4}>
              <p>{formatMessage("common.or")}</p>
            </Col>
            <Col span={10}>
              <hr />
            </Col>
          </Row>
          <Button
            className="button-pepsi button-pepsi-cancel"
            onClick={() =>
              history.push(
                props.isLogin
                  ? generatePath(routerRegister.path, {
                      step: "form",
                      phone: "00",
                    })
                  : generatePath(routerLogin.path, {
                      step: "form",
                      phone: "00",
                    })
              )
            }
          >
            {formatMessage(props.isLogin ? "auth.register" : "auth.login")}
          </Button>
        </>
      )}
    </div>
  );
};
