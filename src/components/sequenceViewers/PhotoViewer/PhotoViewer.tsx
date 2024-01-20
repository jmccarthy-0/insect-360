import { useState, useEffect } from 'react';
import { useSingleImageLoader } from '@hooks/singleImageLoader';

import Loader from '@components/global/Loader/Loader';
import ZoomBtns from "@components/sequenceViewers/ZoomBtns/ZoomBtns";
import ImageCanvas from '@components/global/ImageCanvas/ImageCanvas';

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
        <div className='w-dvw h-dvh bg-black overscroll-none'>
            {displayLoader && <Loader />}
            <ZoomBtns setZoomLevel={setZoomLevel} zoomLevel={zoomLevel}/>
            <ImageCanvas img={img} zoomLevel={zoomLevel} isInteractive={true}/>
        </div>
    )
}

export default PhotoViewer;