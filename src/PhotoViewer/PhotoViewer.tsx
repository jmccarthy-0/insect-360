import { useState, useEffect } from 'react';
import { useSingleImageLoader } from '../hooks/singleImageLoader';

import ImageCanvas from '../ImageCanvas/ImageCanvas';
import ZoomBtns from "../ZoomBtns/ZoomBtns";

import classes from './PhotoViewer.module.css';
import Loader from '../Loader/Loader';




const PhotoViewer = () => {
    const img = useSingleImageLoader('/hi-res/29540763125_daca6ae7f7_o.jpg');
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