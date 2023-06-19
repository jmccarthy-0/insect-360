import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageCanvas from './ImageCanvas/ImageCanvas'

import imgSpriteUrl from './assets/wasp/mobile/webp/wasp_mobile_spritesheet.webp';

function App() {
  const [img, setImg] = useState<ImageBitmap[]>([]);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  useEffect(() => {
    const imgObj = new Image();

    type SpriteBitmapArr = Promise<ImageBitmap>[];
    const spriteBitmaps: SpriteBitmapArr = [];
    
    // Promise.all([
    //   createImageBitmap(imgObj, 0, 0, 960, 540),
    //   createImageBitmap(imgObj, 960, 0, 1920, 540),
    //   createImageBitmap(imgObj, 1920, 0, 2880, 540),
    //   createImageBitmap(imgObj, 2880, 0, 3840, 540),
    //   createImageBitmap(imgObj, 3840, 0, 4800, 540),
    //   createImageBitmap(imgObj, 4800, 0, 5760, 540),
    //   createImageBitmap(imgObj, 5760, 0, 6720, 540),
    //   createImageBitmap(imgObj, 6720, 0, 7680, 540),
    //   createImageBitmap(imgObj, 7680, 0, 8640, 540),
    //   createImageBitmap(imgObj, 8640, 0, 9600, 540),
    //  ])

    imgObj.onload = () => {
      
      for (let i=0; i<10; i++) {
        const startX = i * 960;
        const endX = startX + 960;
        spriteBitmaps[i] = createImageBitmap(imgObj, startX, 0, endX, 540);
      }

      try {
        Promise.all(
          spriteBitmaps
        ).then((sprites) => {
          setImg(sprites);
        });
      } catch (error) {
        console.log(error);
      }
    }

    imgObj.src = imgSpriteUrl;
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.valueAsNumber);
    setActiveImgIndex(e.target.valueAsNumber)
  }

  return (
    <>
      <ImageCanvas img={img} activeImgIndex={activeImgIndex} />
      <input type="range" step={1} min={0} max={9} value={activeImgIndex} onChange={handleChange}/>
    </>
  )
}

export default App
