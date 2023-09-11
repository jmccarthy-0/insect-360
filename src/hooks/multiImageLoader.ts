import { useState, useEffect } from 'react';

const loadImg = (imgSrc: string): Promise<HTMLImageElement> => {
    return new Promise(resolve => {
      const imgObj = new Image();
      
      imgObj.onload = () => {
        resolve(imgObj);
      }
  
      imgObj.src = imgSrc;
    });
};
  
const getBitMaps = async (imgPromises: Promise<HTMLImageElement>[]) => {
    const imgs = await Promise.all(imgPromises);
  
    const bitMaps = await Promise.all(
      imgs.map(img => createImageBitmap(img, 0, 0, img.width, img.height))
    );
  
    return bitMaps;
};

/**
 * 
 * @param imgCount Number of frames available for this image set
 * @param path URL to images up until (but not including the file number)
 * @param format Filetype
 * @param padding Number of placeholders in the file number
 */
const useMultiImageLoader = (imgCount: number, path: string, format='webp', padding=2) => {
    const [renderImgs, setRenderImgs] = useState<ImageBitmap[]>([]);

    useEffect(() => {
        /**
         * Build array of promises as images are loading
        */
        const imgPromises: Promise<HTMLImageElement>[] = [];
        
        for (let i=1; i<=imgCount; i++) {
            imgPromises.push(loadImg(`${path}${i.toString().padStart(padding, "0")}.${format}`));
        }
 
        /**
        * Convert imgPromises -> Image Objects -> Bitmaps
        * Update image state
        * */ 
        (async () => {
            const sprites = await getBitMaps(imgPromises) 
            setRenderImgs(sprites);
        })();
    }, []);

    return renderImgs;
};

export default useMultiImageLoader