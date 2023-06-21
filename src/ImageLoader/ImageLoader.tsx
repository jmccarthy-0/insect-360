import { useEffect } from "react";

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
      imgs.map(img => createImageBitmap(img, 0, 0, 900, 900))
    );
  
    return bitMaps;
};


interface ImageLoaderProps {
    imgCount: number;
    setImg:  (value: ImageBitmap[] | ((prevVar: ImageBitmap[]) => ImageBitmap[])) => void;
}

const ImageLoader = ({imgCount, setImg}: ImageLoaderProps) => {
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

    return null;
}

export default ImageLoader;