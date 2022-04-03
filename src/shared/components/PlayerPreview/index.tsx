import React from 'react';
import { Player, BigPlayButton, ControlBar } from "video-react";
import { Modal } from 'antd'
import "node_modules/video-react/dist/video-react.css";
import "./style.scss"
import { X } from 'react-feather';

const Preview: React.FC<{  modal: { visible: boolean, src:any }, setModal: (modal: any) => void }> = ({ modal, setModal }) => {
    const onCancel = () => {
        setModal({ visible: false })
    }
    return <Modal
        className="video-modal"
        destroyOnClose={true}
        visible={modal.visible}
        closable={true}
        width="60%"
        closeIcon={<X color="white" className="close-button"/>}
        footer={false}
        onCancel={onCancel}>
        <Player
            playsInline
            src={modal.src}
            controlBar={true}
            aspectRatio="16:9"
            autoPlay
            startTime={1}
            className="w-100 preview-video">
            <ControlBar autoHide={false} />
            <BigPlayButton position="center" />
        </Player>
    </Modal>
}
export default React.memo(Preview);