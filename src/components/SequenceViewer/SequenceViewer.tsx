import { useEffect, useState } from 'react';
import { Taxon } from '../../utils/ts/types';

import useMultiImageLoader from '../../hooks/multiImageLoader';

import ImageCanvas from '../ImageCanvas/ImageCanvas'
import Loader from '../Loader/Loader';
import PhotoInfoModal from '../PhotoInfo/PhotoInfoModal';
import PhotoViewerModal from '../PhotoViewer/PhotoViewerModal';
import SequenceViewerControls from '../SequenceViewerControls/SequenceViewerControls';

import classes from './SequenceViewer.module.css';

interface SequenceViewerProps {
    species: Taxon;
}

const SequenceViewer = ({ species: { images, meta }}: SequenceViewerProps) => {
    const imgs = useMultiImageLoader(images.sequenceFramecount, images.sequence.path);
    const [activeImgIndex, setActiveImgIndex] = useState(0);
    const [displayPhotoInfo, setDisplayPhotoInfo] = useState(false);
    const [displayPhotoViewer, setDisplayPhotoViewer] = useState(false);
    const [displayLoader, setDisplayLoader] = useState(true);
    const [activeHiResImgUrl, setActiveHighResImgUrl] = useState(`${import.meta.env.BASE_URL}${images.sequenceHiRes.path}${(activeImgIndex + 1).toString().padStart(2, '0')}.${images.sequenceHiRes.filetype}`); // Convert to reusable function

    useEffect(() => {
        if (imgs.length === images.sequenceFramecount) {
            setDisplayLoader(false);
        }
    }, [imgs]);

    useEffect(() => {
        setActiveHighResImgUrl(`${import.meta.env.BASE_URL}${images.sequenceHiRes.path}${(activeImgIndex + 1).toString().padStart(2, '0')}.${images.sequenceHiRes.filetype}`);
    }, [ images, activeImgIndex]);

    return (
        <div className={classes['sequence-viewer']}>
            {displayLoader && <Loader />}

            <SequenceViewerControls 
                setDisplayPhotoInfo={setDisplayPhotoInfo}
                setDisplayPhotoViewer={setDisplayPhotoViewer}
                activeImgIndex={activeImgIndex}
                setActiveImgIndex={setActiveImgIndex}
                imgCount={images.sequenceFramecount}
            />
            <ImageCanvas img={imgs[activeImgIndex]} />
            

            {/* Modal details about a given photo */}
            { displayPhotoInfo && <PhotoInfoModal setOpen={setDisplayPhotoInfo} content={meta.photoInfo}/>
            }

            {/* Modal Canvas for viewing Hi-res images. Refactor to separate component */}
            { displayPhotoViewer && <PhotoViewerModal setOpen={setDisplayPhotoViewer} imgPath={activeHiResImgUrl} /> }
        </div>
    )
}

export default SequenceViewer;