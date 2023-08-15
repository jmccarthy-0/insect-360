import { useState, useMemo } from 'react';

import Modal from "../Modal/Modal";
import ZoomBtns from "../ZoomBtns/ZoomBtns";
import PhotoViewer from "./PhotoViewer";

interface PhotoViewerModalProps {
    setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    imgFileIndex: number
}

const PhotoViewerModal = ({ setOpen, imgFileIndex }: PhotoViewerModalProps) => {
    const [zoomLevel, setZoomLevel] = useState(0);
    
    return (
        <Modal setOpen={setOpen}>
            <ZoomBtns setZoomLevel={setZoomLevel}  zoomLevel={zoomLevel}/>
            <PhotoViewer zoomLevel={zoomLevel} />
        </Modal>
    );
};

export default PhotoViewerModal;