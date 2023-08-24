import Modal from "../Modal/Modal";
import PhotoViewer from "./PhotoViewer";

interface PhotoViewerModalProps {
    setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const PhotoViewerModal = ({ setOpen }: PhotoViewerModalProps) => {
    return (
        <Modal setOpen={setOpen} animationDirection="right">
            <PhotoViewer />
        </Modal>
    );
};

export default PhotoViewerModal;