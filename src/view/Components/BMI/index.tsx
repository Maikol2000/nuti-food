import '../../styles/component-style/bmi-view.scss'
import { frameBMI } from "@assets/images";
import ProductComponent from "@shared/components/ProductComponent";
import { useAltaIntl } from "@shared/hook/useTranslate";
import { Button, Table } from "antd";
import React, { useState } from "react";

interface IBMI {
  score: number;
  overView: {
    status: string;
    advise: string;
  };
  result: string;
  productAdvise: {
    urlImage: string;
    id: string;
  };
}

const BMI: React.FC<IBMI> = (props) => {
  const { formatMessage } = useAltaIntl();
  const [showModal, setShowModal] = useState(true);

  const openModal = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };
  const columns = [
    {
      title: formatMessage("bmi.table.classify"),
      dataIndex: "classify",
      key: "classify",
    },
    {
      title: "WHO BMI (kg/m2)",
      dataIndex: "kg",
      key: "kg",
    },
    {
      title: "IDI & WPRO BMI (kg/m2)",
      dataIndex: "idi",
      key: "idi",
    },
  ];

  const data = [
    {
      key: "1",
      classify: formatMessage("bmi.classify.thin"),
      kg: "<18.5",
      idi: "<18.5",
    },
    {
      key: "2",
      classify: formatMessage("bmi.classify.normal"),
      kg: "18.5 - 24.9",
      idi: "18.5 - 22.9",
    },
    {
      key: "3",
      classify: formatMessage("bmi.classify.overweight"),
      kg: "25 - 29.9",
      idi: "23 - 24.9",
    },
    {
      key: "4",
      classify: formatMessage("bmi.classify.fat1"),
      kg: "30 - 34.9",
      idi: "25 - 29.9",
    },
    {
      key: "5",
      classify: formatMessage("bmi.classify.fat2"),
      kg: "35 - 39.9",
      idi: "30 - 34.9",
    },
    {
      key: "6",
      classify: formatMessage("bmi.classify.fat3"),
      kg: ">=40",
      idi: ">=35",
    },
  ];

  return (
    <div className={`modal ${showModal ? "active" : ""}`}>
      <div className="main-card">
        <div className="main-form">
          <button className="btn btn-close" onClick={handleCancel}></button>
          <div className="header">
            <div className="secondary-title">
              <div className="inside-title">{formatMessage("bmi.result.title")}</div>
            </div>
          </div>
          <div className="circle">
            <img src={frameBMI} alt="frame BMI" className="circle-img" />
            <span className="circle-text">{props.score}</span>
          </div>
          <div className="bmi">
            <div className="bmi-content">
              <p className="bmi-title">{formatMessage("bmi.result.overview")}</p>
              <p className="text">
                <span>{formatMessage("bmi.result.status")}: </span> {props.overView.status}
              </p>
              <p className="text">
                <span>{formatMessage("bmi.result.advise")}: </span> {props.overView.advise}
              </p>
            </div>
            <div className="bmi-table">
              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                bordered
                rowClassName="disabled-row"
              />
            </div>
          </div>
          <div className="advise">
            <p className="text">{props.result}</p>
            <Button type="primary">{formatMessage("bmi.result.consult")}</Button>
          </div>
          <ProductComponent image={props.productAdvise.urlImage} id={props.productAdvise.id} />
        </div>
      </div>
    </div>
  );
};

export default BMI;
