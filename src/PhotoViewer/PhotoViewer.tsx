import { useState } from 'react';
import { useSingleImageLoader } from '../hooks/singleImageLoader';

import ImageCanvas from './PhotoCanvas';
import ZoomBtns from "../ZoomBtns/ZoomBtns";




const PhotoViewer = () => {
    const img = useSingleImageLoader('/hi-res/29540763125_daca6ae7f7_o.jpg');
    const [zoomLevel, setZoomLevel] = useState(0);

    return (   
        <>
            <ZoomBtns setZoomLevel={setZoomLevel}  zoomLevel={zoomLevel}/>
            <ImageCanvas img={img} zoomLevel={zoomLevel} panningEnabled={true} />
        </>
    )
}

export default PhotoViewer;