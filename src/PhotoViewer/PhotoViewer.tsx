import { useState, useEffect } from 'react';
import { useSingleImageLoader } from '../hooks/singleImageLoader';

import ImageCanvas from '../ImageCanvas/ImageCanvas';
import Loader from '../Loader/Loader';
import ZoomBtns from "../ZoomBtns/ZoomBtns";

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
        <div className={classes['photo-viewer']}>
            {displayLoader && <Loader />}
            <ZoomBtns setZoomLevel={setZoomLevel}  zoomLevel={zoomLevel}/>
            <ImageCanvas img={img} zoomLevel={zoomLevel} panningEnabled={true} />
        </div>
    )
}

export default PhotoViewer;