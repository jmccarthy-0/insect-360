import { useState, useEffect } from 'react'
import './App.css'
import ImageCanvas from './ImageCanvas/ImageCanvas'
import ImageLoader from './ImageLoader/ImageLoader';
import TimelineScrubber from './TimelineScrubber/TimelineScrubber';

const App = () => {
  const [img, setImg] = useState<ImageBitmap[]>([]);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [imgCount, setImgCount] = useState(360);

  return (
    <>
      <ImageLoader imgCount={imgCount} setImg={setImg} />
      <ImageCanvas img={img} activeImgIndex={activeImgIndex} />
      <TimelineScrubber min={0} max={imgCount - 1} value={activeImgIndex} setTimelineIndex={setActiveImgIndex} />
    </>
  )
}

export default App
