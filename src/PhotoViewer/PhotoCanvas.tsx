import {useRef, useEffect} from 'react';
import classes from './PhotoViewer.module.css';

import {resizeCanvas, getImgCenterOffset, getDefaultImgScale} from '../utils/canvas-utils';

interface PhotoCanvasProps {
    img: HTMLImageElement | null;
    zoomLevel: number
}

const ImageCanvas = ({img, zoomLevel}: PhotoCanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    

    useEffect(() => {
        
        if (img && canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            let handleWindowResize: (event: Event) => void;

            if (ctx) {
                handleWindowResize = (_) => {
                
                }

                resizeCanvas(canvas, canvas.clientWidth, canvas.clientHeight);

                const scale = getDefaultImgScale(canvas, img) + zoomLevel;
                const dw = Math.min(img.width, img.width * scale);
                const dh = Math.min(img.height, img.height * scale);

                const [dx, dy] = getImgCenterOffset(canvas, dw, dh, 1);

                ctx?.clearRect(0, 0, canvas.width, canvas.height);
                ctx?.drawImage(img, dx, dy, dw, dh);




                window.addEventListener('resize', handleWindowResize);
            }

            return () => {
                // Kill canvas resize event listener
                window.removeEventListener('resize', handleWindowResize)
            };
        }
    }, [img, zoomLevel])

    return (
        <canvas className={classes.photoViewer} ref={canvasRef}></canvas>
    );
}

export default ImageCanvas;