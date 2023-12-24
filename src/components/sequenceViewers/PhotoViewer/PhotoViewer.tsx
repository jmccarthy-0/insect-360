import { useState, useEffect, MouseEvent, TouchEvent } from 'react';
import { useSingleImageLoader } from '@hooks/singleImageLoader';

import DraggableCanvas from '@components/sequenceViewers/DraggableCanvas/DraggableCanvas';
import Loader from '@components/global/Loader/Loader';
import ZoomBtns from "@components/sequenceViewers/ZoomBtns/ZoomBtns";

import classes from './PhotoViewer.module.css';

interface PhotoViewerProps {
    imgPath: string;
}

const PhotoViewer = ({imgPath}: PhotoViewerProps) => {
    const img = useSingleImageLoader(imgPath);
    const [zoomLevel, setZoomLevel] = useState(0);
    const [displayLoader, setDisplayLoader] = useState(true);
    

    useEffect(() => {
        img && img.complete && setDisplayLoader(false);
    }, [img]);

    return (   
        <div className={`${classes['photo-viewer']}`}>
            {displayLoader && <Loader />}
            <ZoomBtns setZoomLevel={setZoomLevel} zoomLevel={zoomLevel}/>
            <DraggableCanvas img={img} zoomLevel={zoomLevel} />
        </div>
    )
}

export default PhotoViewer;