import { useEffect, useState } from "react";
import { Taxon } from "@utils/ts/types";

import useMultiImageLoader from "@hooks/multiImageLoader";
import useHiResImgUrl from "@hooks/hiResImgSequenceUrl";
import ImageCanvas from "@components/global/ImageCanvas/ImageCanvas";
import Loader from "@components/global/Loader/Loader";
import PhotoInfoModal from "../PhotoInfo/PhotoInfoModal";
import PhotoViewerModal from "../PhotoViewer/PhotoViewerModal";
import SequenceViewerControls from "../SequenceViewerControls/SequenceViewerControls";

interface SequenceViewerProps {
  species: Taxon;
}

const SequenceViewer = ({
  species: { images, photoMeta, sid },
}: SequenceViewerProps) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [displayPhotoInfo, setDisplayPhotoInfo] = useState(false);
  const [displayPhotoViewer, setDisplayPhotoViewer] = useState(false);
  const [displayLoader, setDisplayLoader] = useState(true);

  const hiResImgUrl = useHiResImgUrl(sid, activeImgIndex);
  const imgs = useMultiImageLoader(images.sequenceFramecount, sid);

  useEffect(() => {
    if (imgs.length === images.sequenceFramecount) {
      setDisplayLoader(false);
    }
  }, [imgs]);

  return (
    <div className="relative mx-auto flex aspect-4/3 w-full max-w-4xl flex-col items-center justify-center">
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
      {displayPhotoInfo && (
        <PhotoInfoModal setOpen={setDisplayPhotoInfo} photoMeta={photoMeta} />
      )}

      {/* Modal Canvas for viewing Hi-res images. Refactor to separate component */}
      {displayPhotoViewer && (
        <PhotoViewerModal
          setOpen={setDisplayPhotoViewer}
          imgPath={hiResImgUrl}
        />
      )}
    </div>
  );
};

export default SequenceViewer;
