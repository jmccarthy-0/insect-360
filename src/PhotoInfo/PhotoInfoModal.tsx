import Modal from "../Modal/Modal";
import PhotoInfo from "./PhotoInfo";

import classes from './PhotoInfo.module.css';

interface PhotoInfoModalProps {
    setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const PhotoInfoModal = ({setOpen}: PhotoInfoModalProps) => {
    return (
        <Modal  modalAdjustmentClasses={classes['photo-info-modal']} 
                setOpen={setOpen} 
                animationDirection="fade"
                size="small">
            <PhotoInfo />
        </Modal>
    );
}

export default PhotoInfoModal;