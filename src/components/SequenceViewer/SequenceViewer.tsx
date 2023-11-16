import { useEffect, useState } from 'react';
import { Taxon } from '../../utils/ts/types';

import useMultiImageLoader from '../../hooks/multiImageLoader';
import { getSpeciesHiResImgSequenceUrl } from '../../utils/ts/img-utils';

import ImageCanvas from '../ImageCanvas/ImageCanvas'
import Loader from '../Loader/Loader';
import PhotoInfoModal from '../PhotoInfo/PhotoInfoModal';
import PhotoViewerModal from '../PhotoViewer/PhotoViewerModal';
import SequenceViewerControls from '../SequenceViewerControls/SequenceViewerControls';

import classes from './SequenceViewer.module.css';

interface SequenceViewerProps {
    species: Taxon;
}

const SequenceViewer = ({ species: { images, meta, sid }}: SequenceViewerProps) => {
    const [activeImgIndex, setActiveImgIndex] = useState(0);
    const [displayPhotoInfo, setDisplayPhotoInfo] = useState(false);
    const [displayPhotoViewer, setDisplayPhotoViewer] = useState(false);
    const [displayLoader, setDisplayLoader] = useState(true);
    const [activeHiResImgUrl, setActiveHighResImgUrl] = useState(getSpeciesHiResImgSequenceUrl(sid, activeImgIndex)); // Convert to reusable function
    
    const imgs = useMultiImageLoader(images.sequenceFramecount, sid);

    useEffect(() => {
        if (imgs.length === images.sequenceFramecount) {
            setDisplayLoader(false);
        }
    }, [imgs]);

    useEffect(() => {
        setActiveHighResImgUrl(getSpeciesHiResImgSequenceUrl(sid, activeImgIndex));
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