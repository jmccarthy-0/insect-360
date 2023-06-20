import { useState, useEffect } from 'react'
import './App.css'
import ImageCanvas from './ImageCanvas/ImageCanvas'



const loadImg = (imgSrc: string): Promise<HTMLImageElement> => {
  return new Promise(resolve => {
    const imgObj = new Image();
    
    imgObj.onload = () => {
      resolve(imgObj);
    }

    imgObj.src = imgSrc;
  });
}

const getBitMaps = async (imgPromises: Promise<HTMLImageElement>[]) => {
  const imgs = await Promise.all(imgPromises);

  const bitMaps = await Promise.all(
    imgs.map(img => createImageBitmap(img, 0, 0, 960, 540))
  );

  return bitMaps;
};

function App() {
  const [img, setImg] = useState<ImageBitmap[]>([]);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [imgCount, setImgCount] = useState(360);

  // onMount
  useEffect(() => {
    /**
     * Build array of promises as images are loading
    */
    const imgPromises: Promise<HTMLImageElement>[] = [];
    
    for (let i=1; i<=imgCount; i++) {
      imgPromises.push(loadImg(`/mobile/webp/${i.toString().padStart(4, "0")}.webp`));
    }

    /**
     * Convert imgPromises -> Image Objects -> Bitmaps
     * Update image state
     * */ 
    (async () => {
      const sprites = await getBitMaps(imgPromises) 
      setImg(sprites);
    })();
    
  }, []);

  /**
   * Update image sequence using range slider
   * @param e 
   */
  const handleIndexRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.valueAsNumber);
    setActiveImgIndex(e.target.valueAsNumber)
  };

  return (
    <>
      <ImageCanvas img={img} activeImgIndex={activeImgIndex} />
      <input type="range" step={1} min={0} max={imgCount - 1} value={activeImgIndex} onChange={handleIndexRangeChange}/>
    </>
  )
}

export default App
