import Modal from "../Modal/Modal";
import PhotoInfo from "./PhotoInfo";

import classes from './PhotoInfo.module.css';

interface PhotoInfoModalProps {
    setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    content: string;
}

const PhotoInfoModal = ({setOpen, content}: PhotoInfoModalProps) => {
    return (
        <Modal  modalAdjustmentClasses={classes['photo-info-modal']} 
                setOpen={setOpen} 
                animationDirection="fade"
                size="small">
            <PhotoInfo content={content}/>
        </Modal>
    );
}

export default PhotoInfoModal;