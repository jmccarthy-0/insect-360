import { useState } from 'react';
import ImageCanvas from '../ImageCanvas/ImageCanvas'
import ImageLoader from '../ImageLoader/ImageLoader';
import TimelineScrubber from '../TimelineScrubber/TimelineScrubber';

import './SequenceViewer.css';
import Modal from '../Modal/Modal';
import PhotoInfo from '../PhotoInfo/PhotoInfo';
import PhotoViewer from '../PhotoViewer/PhotoViewer';
import InfoBtn from '../Btn/InfoBtn';
import ExpandBtn from '../Btn/ExpandBtn';

interface SequenceViewerProps {
    imgCount: number;
}

const SequenceViewer = ({ imgCount }: SequenceViewerProps) => {
    const [img, setImg] = useState<ImageBitmap[]>([]);
    const [activeImgIndex, setActiveImgIndex] = useState(0);
    const [displayPhotoInfo, setDisplayPhotoInfo] = useState(false);
    const [displayPhotoViewer, setDisplayPhotoViewer] = useState(false);

    const handleInfoClick = () => {
        setDisplayPhotoInfo(true);
    }

    const handleViewerClick = () => {
        setDisplayPhotoViewer(true);
    }

    return (
        <div className='sequence-viewer'>
            <InfoBtn handleClick={handleInfoClick}/>
        
            <ExpandBtn handleClick={handleViewerClick} />
            
            <ImageLoader imgCount={imgCount} setImg={setImg} />
            <ImageCanvas img={img} activeImgIndex={activeImgIndex} />
            <TimelineScrubber min={0} max={imgCount - 1} value={activeImgIndex} setTimelineIndex={setActiveImgIndex} />

            { displayPhotoInfo && <Modal setOpen={setDisplayPhotoInfo}>
                <PhotoInfo />
            </Modal> }
            { displayPhotoViewer && <Modal setOpen={setDisplayPhotoViewer}>
                <PhotoViewer imgFileIndex={activeImgIndex + 1} />
            </Modal> }
        </div>
    )
}

export default SequenceViewer;