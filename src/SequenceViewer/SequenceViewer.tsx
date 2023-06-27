import { useEffect, useState } from 'react';
import ImageCanvas from '../ImageCanvas/ImageCanvas'
import ImageLoader from '../ImageLoader/ImageLoader';
import TimelineScrubber from '../TimelineScrubber/TimelineScrubber';

import './SequenceViewer.css';
import Modal from '../Modal/Modal';
import PhotoInfo from '../PhotoInfo/PhotoInfo';
import PhotoViewer from '../PhotoViewer/PhotoViewer';
import InfoBtn from '../Btn/InfoBtn';
import ExpandBtn from '../Btn/ExpandBtn';
import Loader from '../Loader/Loader';

interface SequenceViewerProps {
    imgCount: number;
}

const SequenceViewer = ({ imgCount }: SequenceViewerProps) => {
    const [img, setImg] = useState<ImageBitmap[]>([]);
    const [activeImgIndex, setActiveImgIndex] = useState(0);
    const [displayPhotoInfo, setDisplayPhotoInfo] = useState(false);
    const [displayPhotoViewer, setDisplayPhotoViewer] = useState(false);
    const [displayLoader, setDisplayLoader] = useState(true);

    const handleInfoClick = () => {
        setDisplayPhotoInfo(true);
    }

    const handleViewerClick = () => {
        setDisplayPhotoViewer(true);
    }

    useEffect(() => {
        if (img.length === imgCount) {
            setDisplayLoader(false);
        }
    }, [img]);

    return (
        <div className='sequence-viewer'>
            <ImageLoader imgCount={imgCount} setImg={setImg} />

            {displayLoader && <Loader />}

            <InfoBtn classes='sequence-viewer__info-btn' handleClick={handleInfoClick}/>
        
            <ExpandBtn classes='sequence-viewer__expand-btn' handleClick={handleViewerClick} />
            
            <ImageCanvas img={img} activeImgIndex={activeImgIndex} />
            <TimelineScrubber min={0} max={imgCount - 1} value={activeImgIndex} setTimelineIndex={setActiveImgIndex} />

            { displayPhotoInfo && <Modal modalAdjustmentClasses='photo-info-modal' setOpen={setDisplayPhotoInfo}>
                <PhotoInfo />
            </Modal> }
            { displayPhotoViewer && <Modal setOpen={setDisplayPhotoViewer}>
                <PhotoViewer imgFileIndex={activeImgIndex + 1} />
            </Modal> }
        </div>
    )
}

export default SequenceViewer;