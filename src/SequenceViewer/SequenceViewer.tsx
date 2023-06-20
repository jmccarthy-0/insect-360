import { useState } from 'react';
import ImageCanvas from '../ImageCanvas/ImageCanvas'
import ImageLoader from '../ImageLoader/ImageLoader';
import TimelineScrubber from '../TimelineScrubber/TimelineScrubber';

import './SequenceViewer.css';

interface SequenceViewerProps {
    imgCount: number;
}

const SequenceViewer = ({ imgCount }) => {
    const [img, setImg] = useState<ImageBitmap[]>([]);
    const [activeImgIndex, setActiveImgIndex] = useState(0);

    return (
        <div className='sequence-viewer'>
            <ImageLoader imgCount={imgCount} setImg={setImg} />
            <ImageCanvas img={img} activeImgIndex={activeImgIndex} />
            <TimelineScrubber min={0} max={imgCount - 1} value={activeImgIndex} setTimelineIndex={setActiveImgIndex} />
        </div>
    )
}

export default SequenceViewer;