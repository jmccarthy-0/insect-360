import { useEffect, useState } from 'react';
import ImageCanvas from '../ImageCanvas/ImageCanvas'
import ImageLoader from '../ImageLoader/ImageLoader';
import TimelineScrubber from '../TimelineScrubber/TimelineScrubber';

import './SequenceViewer.css';
import Modal from '../Modal/Modal';
import PhotoInfo from '../PhotoInfo/PhotoInfo';
import PhotoViewer from '../PhotoViewer/PhotoViewer';
import Btn from '../Btn/Btn';
import InfoBtn from '../Btn/InfoBtn';
import ExpandBtn from '../Btn/ExpandBtn';
import Loader from '../Loader/Loader';
import ZoomBtns from '../ZoomBtns/ZoomBtns';
import PhotoViewerModal from '../PhotoViewer/PhotoViewerModal';

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

            {/* Modal details about a given photo */}
            { displayPhotoInfo && <Modal modalAdjustmentClasses='photo-info-modal' setOpen={setDisplayPhotoInfo}>
                <PhotoInfo />
            </Modal> }

            {/* Modal Canvas for viewing Hi-res images. Refactor to separate component */}
            { displayPhotoViewer && <PhotoViewerModal setOpen={setDisplayPhotoViewer} imgFileIndex={activeImgIndex + 1} /> }

            
        </div>
    )
}

export default SequenceViewer;