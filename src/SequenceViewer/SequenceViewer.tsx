import { useState } from 'react';
import ImageCanvas from '../ImageCanvas/ImageCanvas'
import ImageLoader from '../ImageLoader/ImageLoader';
import TimelineScrubber from '../TimelineScrubber/TimelineScrubber';

import './SequenceViewer.css';
import Modal from '../Modal/Modal';
import PhotoInfo from '../PhotoInfo/PhotoInfo';

interface SequenceViewerProps {
    imgCount: number;
}

const SequenceViewer = ({ imgCount }: SequenceViewerProps) => {
    const [img, setImg] = useState<ImageBitmap[]>([]);
    const [activeImgIndex, setActiveImgIndex] = useState(0);
    const [displayPhotoInfo, setDisplayPhotoInfo] = useState(false);

    const handleInfoClick = () => {
        setDisplayPhotoInfo(true);
    }

    return (
        <div className='sequence-viewer'>
            <button onClick={handleInfoClick}>Info</button>
            <ImageLoader imgCount={imgCount} setImg={setImg} />
            <ImageCanvas img={img} activeImgIndex={activeImgIndex} />
            <TimelineScrubber min={0} max={imgCount - 1} value={activeImgIndex} setTimelineIndex={setActiveImgIndex} />

            { displayPhotoInfo && <Modal setOpen={setDisplayPhotoInfo}>
                <PhotoInfo />
            </Modal> }
        </div>
    )
}

export default SequenceViewer;