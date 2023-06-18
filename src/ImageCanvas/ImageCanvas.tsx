import { useEffect, useRef } from 'react';
import './ImageCanvas.css';

interface ImageCanvasProps {
    img: HTMLImageElement | null
}

const ImageCanvas = ({img}: ImageCanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    
    useEffect(() => {
        if (canvasRef.current && img) {
            const ctx = canvasRef.current.getContext('2d');
            canvasRef.current.width = img.naturalWidth;
            canvasRef.current.height = img.naturalHeight;

            ctx?.drawImage(img, 0, 0, img.width, img.height);
        }
    }, [img])

    return (
        <canvas ref={canvasRef}></canvas>
    );
 }

 export default ImageCanvas;