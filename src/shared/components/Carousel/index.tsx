import React, { useRef } from 'react';
import { Button, Carousel, Modal } from 'antd'
import "node_modules/video-react/dist/video-react.css";
import "./style.scss"
import { ChevronLeft, ChevronRight, X } from 'react-feather';

const PreviewCarousel: React.FC<{ modal: { visible: boolean, data: any }, setModal: (modal: any) => void }> = ({ modal, setModal }) => {
    const carousel = useRef<any>();
    
    const onCancel = () => {
        setModal({ visible: false })
    }

    const onPrev=()=>{
        carousel.current.prev();
    }

    const onNext=()=>{
        carousel.current.next();
    }

    return <Modal
        className="carousel-modal"
        destroyOnClose={true}
        visible={modal.visible}
        closable={true}
        width="60%"
        closeIcon={<X color="white" className="close-button" />}
        footer={false}
        onCancel={onCancel}>
        <Carousel effect="scrollx" ref={carousel}>
            {
                modal.data?.map((src, key) => {
                    return <div key={key} className="slide-item">
                        <img src={src} className="slide-item-image" />
                    </div>
                })
            }
        </Carousel>
        <Button shape="circle" className="left button-circle" onClick={onPrev} >
            <ChevronLeft />
        </Button>
        <Button shape="circle" className="right button-circle" onClick={onNext}>
            <ChevronRight  />
        </Button>
    </Modal>
}
export default React.memo(PreviewCarousel);