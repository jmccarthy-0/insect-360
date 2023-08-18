import { useState } from 'react';
import { useSingleImageLoader } from '../hooks/singleImageLoader';

import ImageCanvas from '../ImageCanvas/ImageCanvas';
import ZoomBtns from "../ZoomBtns/ZoomBtns";

import classes from './PhotoViewer.module.css';




const PhotoViewer = () => {
    const img = useSingleImageLoader('/hi-res/29540763125_daca6ae7f7_o.jpg');
    const [zoomLevel, setZoomLevel] = useState(0);

    return (   
        <>
            <ZoomBtns setZoomLevel={setZoomLevel}  zoomLevel={zoomLevel}/>
            <div className={classes['photo-viewer']}>
                <ImageCanvas img={img} zoomLevel={zoomLevel} panningEnabled={true} />
            </div>
        </>
    )
}

export default PhotoViewer;