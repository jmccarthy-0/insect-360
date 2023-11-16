import { useState, useEffect } from 'react';
import { useSingleImageLoader } from '@hooks/singleImageLoader';

import ImageCanvas from '@components/global/ImageCanvas/ImageCanvas';
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
    const [isGrabbing, setIsGrabbing] = useState(false);

    useEffect(() => {
        img && img.complete && setDisplayLoader(false);
    }, [img]);

    const handleMouseDown = () => {
        setIsGrabbing(true);
    }
    const handleMouseUp = () => {
        setIsGrabbing(false);
    }
    const handleMouseLeave = () => {
        setIsGrabbing(false);
    }

    return (   
        <div className={`${classes['photo-viewer']} ${isGrabbing ? classes['photo-viewer--is-grabbing'] : ''}`} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave}>
            {displayLoader && <Loader />}
            <ZoomBtns setZoomLevel={setZoomLevel} zoomLevel={zoomLevel}/>
            <ImageCanvas img={img} zoomLevel={zoomLevel} panningEnabled={true} />
        </div>
    )
}

export default PhotoViewer;