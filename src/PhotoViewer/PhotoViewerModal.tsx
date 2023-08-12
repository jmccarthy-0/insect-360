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

    const img = useMemo(() => {
        const img  = new Image();
        img.src = '/hi-res/29540763125_daca6ae7f7_o.jpg';

        return img;

    }, []);
    
    return (
        <Modal setOpen={setOpen}>
            <ZoomBtns setZoomLevel={setZoomLevel}  zoomLevel={zoomLevel}/>
            <PhotoViewer img={img} zoomLevel={zoomLevel} />
        </Modal>
    );
};

export default PhotoViewerModal;