import { useState, useEffect } from 'react';

const useSingleImageLoader = (src: string) => {
    const [renderImg, setRenderImg] = useState<HTMLImageElement | null>(null);

    useEffect(() => {
        const img = new Image();
    
        img.onload = () => {
            setRenderImg(img);
        }
    
        img.src = src;
    }, [src]);

    return renderImg;
}


export { useSingleImageLoader };