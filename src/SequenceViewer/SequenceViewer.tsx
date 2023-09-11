import { useEffect, useState } from 'react';

import useMultiImageLoader from '../hooks/multiImageLoader';

import ImageCanvas from '../ImageCanvas/ImageCanvas'
import Loader from '../Loader/Loader';
import PhotoInfoModal from '../PhotoInfo/PhotoInfoModal';
import PhotoViewerModal from '../PhotoViewer/PhotoViewerModal';
import SequenceViewerControls from '../SequenceViewerControls/SequenceViewerControls';

import classes from './SequenceViewer.module.css';

interface SequenceViewerProps {
    imgCount: number;
    imgPath: string;
}

const SequenceViewer = ({ imgCount, imgPath }: SequenceViewerProps) => {
    const imgs = useMultiImageLoader(imgCount, imgPath);
    const [activeImgIndex, setActiveImgIndex] = useState(0);
    const [displayPhotoInfo, setDisplayPhotoInfo] = useState(false);
    const [displayPhotoViewer, setDisplayPhotoViewer] = useState(false);
    const [displayLoader, setDisplayLoader] = useState(true);

    useEffect(() => {
        if (imgs.length === imgCount) {
            setDisplayLoader(false);
        }
    }, [imgs]);

    return (
        <div className={classes['sequence-viewer']}>
            {displayLoader && <Loader />}

            <SequenceViewerControls 
                setDisplayPhotoInfo={setDisplayPhotoInfo}
                setDisplayPhotoViewer={setDisplayPhotoViewer}
                activeImgIndex={activeImgIndex}
                setActiveImgIndex={setActiveImgIndex}
                imgCount={imgCount}
            />
            <ImageCanvas img={imgs[activeImgIndex]} />
            

            {/* Modal details about a given photo */}
            { displayPhotoInfo && <PhotoInfoModal setOpen={setDisplayPhotoInfo}/>
            }

            {/* Modal Canvas for viewing Hi-res images. Refactor to separate component */}
            { displayPhotoViewer && <PhotoViewerModal setOpen={setDisplayPhotoViewer} /> }
        </div>
    )
}

export default SequenceViewer;