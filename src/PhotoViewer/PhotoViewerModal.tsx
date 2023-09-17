import Modal from "../Modal/Modal";
import PhotoViewer from "./PhotoViewer";

interface PhotoViewerModalProps {
    setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    imgPath: string;
}

const PhotoViewerModal = ({ setOpen, imgPath }: PhotoViewerModalProps) => {
    return (
        <Modal setOpen={setOpen} animationDirection="fade" theme="dark">
            <PhotoViewer imgPath={imgPath} />
        </Modal>
    );
};

export default PhotoViewerModal;