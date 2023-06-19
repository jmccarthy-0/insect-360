import { useEffect, useRef } from 'react';
import './ImageCanvas.css';

interface ImageCanvasProps {
    img: ImageBitmap[];
    activeImgIndex: number;
}

const ImageCanvas = ({img, activeImgIndex}: ImageCanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
        if (canvasRef.current && img[0]) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            canvas.width = img[0].width;
            canvas.height = img[0].height;


            window.requestAnimationFrame(() => {
                ctx?.drawImage(img[activeImgIndex], 0, 0);
            });
        }
    }, [img, activeImgIndex])

    return (
        <canvas ref={canvasRef}></canvas>
    );
 }

 export default ImageCanvas;