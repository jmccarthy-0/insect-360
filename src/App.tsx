import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageCanvas from './ImageCanvas/ImageCanvas'

import imgUrl0001 from './assets/wasp/mobile/0001.webp';

function App() {
  const [img, setImg] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const imgObj = new Image();

    imgObj.addEventListener('load', () => {
      setImg(imgObj);
    });

    imgObj.src = imgUrl0001;
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ImageCanvas img={img} />
    </>
  )
}

export default App
