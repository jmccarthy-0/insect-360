import ExpandBtn from "@components/global/Btn/ExpandBtn";
import InfoBtn from "@components/global/Btn/InfoBtn";
import TimelineScrubber from "@components/sequenceViewers/TimelineScrubber/TimelineScrubber";

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
            <InfoBtn classes='absolute top-2.5 left-page-x' handleClick={handleInfoClick}/>
            <ExpandBtn classes='absolute top-2.5 right-page-x' handleClick={handleViewerClick} />
            <TimelineScrubber min={0} max={imgCount - 1} value={activeImgIndex} setTimelineIndex={setActiveImgIndex} />
        </>
    );
};

export default SequenceViewerControls;