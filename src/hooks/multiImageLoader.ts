import { useState, useEffect } from "react";
import { getSpeciesImgSequenceUrl } from "../utils/ts/img-utils";

const loadImg = (imgSrc: string): Promise<HTMLImageElement> => {
  return new Promise((resolve) => {
    const imgObj = new Image();

    imgObj.onload = () => {
      resolve(imgObj);
    };

    imgObj.src = imgSrc;
  });
};

const getBitMaps = async (imgPromises: Promise<HTMLImageElement>[]) => {
  const imgs = await Promise.all(imgPromises);

  const bitMaps = await Promise.all(
    imgs.map((img) => createImageBitmap(img, 0, 0, img.width, img.height)),
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
const useMultiImageLoader = (imgCount: number, sid: string) => {
  const [renderImgs, setRenderImgs] = useState<ImageBitmap[]>([]);

  useEffect(() => {
    /**
     * Build array of promises as images are loading
     */
    const imgPromises: Promise<HTMLImageElement>[] = [];

    for (let i = 0; i < imgCount; i++) {
      imgPromises.push(loadImg(`${getSpeciesImgSequenceUrl(sid, i)}`));
    }

    /**
     * Convert imgPromises -> Image Objects -> Bitmaps
     * Update image state
     * */
    (async () => {
      const sprites = await getBitMaps(imgPromises);
      setRenderImgs(sprites);
    })();
  }, [sid]);

  return renderImgs;
};

export default useMultiImageLoader;
