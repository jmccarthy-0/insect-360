import ExpandBtn from "@components/global/Btn/ExpandBtn";
import InfoBtn from "@components/global/Btn/InfoBtn";
import TimelineScrubber from "@components/sequenceViewers/TimelineScrubber/TimelineScrubber";

interface SequenceViewerControlsProps {
  activeImgIndex: number;
  setActiveImgIndex: (value: number | ((prevVar: number) => number)) => void;
  setDisplayPhotoInfo?: (
    value: boolean | ((prevVar: boolean) => boolean),
  ) => void;
  setDisplayPhotoViewer?: (
    value: boolean | ((prevVar: boolean) => boolean),
  ) => void;
  imgCount: number;
}

const SequenceViewerControls = ({
  setDisplayPhotoInfo,
  setDisplayPhotoViewer,
  activeImgIndex,
  setActiveImgIndex,
  imgCount,
}: SequenceViewerControlsProps) => {
  const handleInfoClick = () => {
    setDisplayPhotoInfo && setDisplayPhotoInfo(true);
  };

  const handleViewerClick = () => {
    setDisplayPhotoViewer && setDisplayPhotoViewer(true);
  };

  return (
    <>
      {
        setDisplayPhotoInfo ?
        <InfoBtn
          classes="absolute top-2.5 left-page-x"
          handleClick={handleInfoClick}
        />
        : null
      }
      {
        setDisplayPhotoViewer ? 
        <ExpandBtn
          classes="absolute top-2.5 right-page-x"
          handleClick={handleViewerClick}
        />
        : null
      }
      <TimelineScrubber
        min={0}
        max={imgCount - 1}
        value={activeImgIndex}
        setTimelineIndex={setActiveImgIndex}
      />
    </>
  );
};

export default SequenceViewerControls;
