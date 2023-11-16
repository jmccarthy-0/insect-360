import ExpandBtn from "@components/global/Btn/ExpandBtn";
import InfoBtn from "@components/global/Btn/InfoBtn";
import TimelineScrubber from "@components/sequenceViewers/TimelineScrubber/TimelineScrubber";

import classes from './SequenceViewerControls.module.css';

interface SequenceViewerControlsProps {
    activeImgIndex: number;
    setActiveImgIndex: (value: number | ((prevVar: number) => number)) => void;
    setDisplayPhotoInfo:  (value: boolean | ((prevVar: boolean) => boolean)) => void;
    setDisplayPhotoViewer: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    imgCount: number;
}

const SequenceViewerControls = ({setDisplayPhotoInfo, setDisplayPhotoViewer, activeImgIndex, setActiveImgIndex, imgCount}: SequenceViewerControlsProps) => {
    const handleInfoClick = () => {
        setDisplayPhotoInfo(true);
    }

    const handleViewerClick = () => {
        setDisplayPhotoViewer(true);
    }
    
    return(
        <>
            <InfoBtn classes={classes['info-btn']} handleClick={handleInfoClick}/>
            <ExpandBtn classes={classes['expand-btn']} handleClick={handleViewerClick} />
            <TimelineScrubber min={0} max={imgCount - 1} value={activeImgIndex} setTimelineIndex={setActiveImgIndex} />
        </>
    );
};

export default SequenceViewerControls;