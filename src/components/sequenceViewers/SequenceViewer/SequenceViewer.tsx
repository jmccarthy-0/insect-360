import { useEffect, useState } from 'react';
import { Taxon } from '@utils/ts/types';

import useMultiImageLoader from '@hooks/multiImageLoader';
import useHiResImgUrl from '@hooks/hiResImgSequenceUrl';
import ImageCanvas from '@components/global/ImageCanvas/ImageCanvas'
import Loader from '@components/global/Loader/Loader';
import PhotoInfoModal from '../PhotoInfo/PhotoInfoModal';
import PhotoViewerModal from '../PhotoViewer/PhotoViewerModal';
import SequenceViewerControls from '../SequenceViewerControls/SequenceViewerControls';

interface SequenceViewerProps {
    species: Taxon;
}

const SequenceViewer = ({ species: { images, meta, sid }}: SequenceViewerProps) => {
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
        <div className='relative flex flex-col justify-center items-center w-full max-w-4xl aspect-4/3 mx-auto'>
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
            { displayPhotoViewer && <PhotoViewerModal setOpen={setDisplayPhotoViewer} imgPath={hiResImgUrl} /> }
        </div>
    )
}

export default SequenceViewer;