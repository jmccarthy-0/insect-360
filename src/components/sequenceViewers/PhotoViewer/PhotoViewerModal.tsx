import Modal from "@components/global/Modal/Modal";
import PhotoViewer from "./PhotoViewer";

interface PhotoViewerModalProps {
  setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  imgPath: string;
}

const PhotoViewerModal = ({ setOpen, imgPath }: PhotoViewerModalProps) => {
  return (
    <Modal
      id="photoViewerModal"
      setOpen={setOpen}
      animationDirection="fade"
      theme="dark"
    >
      <PhotoViewer imgPath={imgPath} />
    </Modal>
  );
};

export default PhotoViewerModal;
