import React, { useState } from "react";
import ButtonVolume from "@view/Components/ButtonVolume";
import { Button } from "antd";
import "./style.scss";
import modal from "antd/lib/modal";
import Counselors from "@shared/components/Counselors";

const config = {
  width: "90%",
  title: <div>XIN CHÚC MỪNG </div>,
  content: (
    <div>
      Xin chúc mừng bạn đã đăng ký thành viên
      <span className="nuti-label"> Nutifood Ngôi nhà dinh dưỡng</span> thành công. Hãy tiếp tục
      trải nghiệm và thăm quan mua sắm nhé!
    </div>
  ),
  className: "main-modal",
  okText: "Xác nhận",
  cancelText: "Huỷ",
};

const Home = () => {
  return (
    <>
      <div className="home-page">
        <Counselors />
        <ButtonVolume isVolume={false} />
        <Button
          type="primary"
          onClick={() => {
            modal.confirm(config);
          }}
        >
          Tiếp theo
        </Button>
        <Button>Cancel</Button>
      </div>
    </>
  );
};

export default Home;
