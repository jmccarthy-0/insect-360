import Modal from "../../global/Modal/Modal";
import PhotoInfo from "./PhotoInfo";

interface PhotoInfoModalProps {
    setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    content: string;
}

const PhotoInfoModal = ({setOpen, content}: PhotoInfoModalProps) => {
    return (
        <Modal  id="photoInfoModal"
                modalAdjustmentClasses='w-full max-w-2xl'
                setOpen={setOpen} 
                animationDirection="fade"
                size="small">
            <PhotoInfo content={content}/>
        </Modal>
    );
}

export default PhotoInfoModal;