import {useState, useRef, useEffect, MouseEvent} from 'react';
import classes from './PhotoViewer.module.css';

import {resizeCanvas, getImgCenterOffset, getDefaultImgScale} from '../utils/canvas-utils';

interface PhotoCanvasProps {
    img: HTMLImageElement | null;
    zoomLevel: number;
    panningEnabled: boolean;
}

const ImageCanvas = ({img, zoomLevel = 0, panningEnabled = false}: PhotoCanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDragging, setisDragging] = useState(false);
    const [prevDragPos, setPrevDragPos] = useState({ x:0 , y:0});

    const [dx, setDx] = useState(0); // Image offset x within the canvas
    const [dy, setDy] = useState(0); // Image offset y within the canvas
    const [dw, setDw] = useState(0); // Image width within the canvas
    const [dh, setDh] = useState(0); // Image height within the canvas
    
    // Set Image Width/Height relative to canvas
    useEffect(() => {    
        if (img && canvasRef.current) {
            const canvas = canvasRef.current;

            let handleWindowResize: (event: Event) => void;
            handleWindowResize = (_) => {
            
            }

            resizeCanvas(canvas, canvas.clientWidth, canvas.clientHeight);

            const scale = getDefaultImgScale(canvas, img) + zoomLevel;
            setDw(Math.min(img.width, img.width * scale));
            setDh(Math.min(img.height, img.height * scale));

            window.addEventListener('resize', handleWindowResize);
            

            return () => {
                // Kill canvas resize event listener
                window.removeEventListener('resize', handleWindowResize)
            };
        }
    }, [img, zoomLevel]);

    // Center Image
    useEffect(() => {
        if (img && canvasRef.current) {
            const canvas = canvasRef.current;
            const [updateDx, updateDy] = getImgCenterOffset(canvas, dw, dh, 1);

            setDx(updateDx);
            setDy(updateDy);
        }
    }, [dw, dh]);

    // Draw Image
    useEffect(() => {
        if (img && canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            ctx?.clearRect(0, 0, canvas.width, canvas.height);
            ctx?.drawImage(img, dx, dy, dw, dh);
        }
    }, [dx, dy]);

    // Event Handlers
    const handleMouseDown = (e: MouseEvent) => {
        if (zoomLevel > 0) {
            setisDragging(true);

            setPrevDragPos({
                x: e.clientX,
                y: e.clientY
            }); 
        }
    }

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            // Difference between current mouse coordinates and previous mouse coordinates 
            const updateDx = dx + (e.clientX - prevDragPos.x);
            const updateDY = dy + (e.clientY - prevDragPos.y);

            // Update image position
            setDx(updateDx);
            setDy(updateDY);

            //Reset Prev Mouse coordinates
            setPrevDragPos({
                x: e.clientX,
                y: e.clientY
            });
        }
    }

    const handleMouseUp = () => {
        setisDragging(false);
    }

    return <canvas className={classes.photoViewer} ref={canvasRef} 
                onMouseDown={panningEnabled ? handleMouseDown : undefined} 
                onMouseMove={panningEnabled ? handleMouseMove : undefined} 
                onMouseUp={panningEnabled ? handleMouseUp : undefined}></canvas>;
}

export default ImageCanvas;