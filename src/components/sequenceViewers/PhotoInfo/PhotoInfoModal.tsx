import Modal from "../../global/Modal/Modal";
import PhotoInfo from "./PhotoInfo";
import { TaxonPhotoMeta } from "@utils/ts/types";

interface PhotoInfoModalProps {
  setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  photoMeta: TaxonPhotoMeta;
}

const PhotoInfoModal = ({ setOpen, photoMeta }: PhotoInfoModalProps) => {
  console.log({photoMeta});
  return (
    <Modal
      id="photoInfoModal"
      modalAdjustmentClasses="w-full max-w-2xl"
      setOpen={setOpen}
      animationDirection="fade"
      size="small"
    >
      <PhotoInfo photoMeta={photoMeta} />
    </Modal>
  );
};

export default PhotoInfoModal;
