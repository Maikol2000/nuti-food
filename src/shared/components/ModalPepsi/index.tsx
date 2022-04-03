import { Button, Form, Modal, ModalProps, Radio, Space } from "antd";
import "./style.scss";
import React, { useState } from "react";

interface IModalPepsi extends ModalProps {}

const ModalPepsi: React.FC<IModalPepsi> = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      {...props}
      wrapClassName="modal-pepsi"
      visible={isModalVisible}
      onCancel={handleCancel}
      closable={false}
      footer={
        <Space align="center">
          <button
            className="button-pepsi button-pepsi-cancel "
            onClick={() => handleCancel()}
          >
            {props.cancelText}
          </button>
          <button type="submit" form="form-report" className="button-pepsi">
            {props.okText}
          </button>
        </Space>
      }
    >
      <div>
        <div className="modal-border modal-border-top-left"></div>
        <div className="modal-border modal-border-top-right"></div>
        <div className="modal-border modal-border-bottom-left"></div>
        <div className="modal-border modal-border-bottom-right"></div>
        <Form
          name="form-report"
          onFinish={onFinish}
          className="main-form form-report"
        >
          <Form.Item name="report" rules={[{ required: true }]}>
            <Radio.Group>
              <Space direction="vertical">
                <Radio value={0}>Video chứa nội dung phản cảm</Radio>
                <Radio value={1}>Lời nói xung đột hoặc gây thù ghét</Radio>
                <Radio value={2}>Đây là nội dung giả mạo</Radio>
                <Radio value={3}>Nội dung bạo lực</Radio>
                <Radio value={4}>Khác</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalPepsi;
