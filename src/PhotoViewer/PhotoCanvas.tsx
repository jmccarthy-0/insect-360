import {useState, useRef, useEffect, MouseEvent, TouchEvent, SyntheticEvent} from 'react';
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

    const [scale, setScale] = useState(1);
    const [dx, setDx] = useState(0); // Image offset x within the canvas
    const [dy, setDy] = useState(0); // Image offset y within the canvas
    const [dw, setDw] = useState(0); // Image width within the canvas
    const [dh, setDh] = useState(0); // Image height within the canvas
    

    //Calculation cascade: scale -> dw/dh -> dx/dy -> draw image

    // Set Image Scale
    useEffect(() => {    
        if (img && canvasRef.current) {
            const canvas = canvasRef.current;

            resizeCanvas(canvas, canvas.clientWidth, canvas.clientHeight);
            setScale(getDefaultImgScale(canvas, img) + zoomLevel);
        }
    }, [img, zoomLevel]);

    // Set Image Width/Height relative to canvas
    useEffect(() => {
        if (img) {

            setDw(Math.min(img.width, img.width * scale));
            setDh(Math.min(img.height, img.height * scale));

        }
    }, [scale]);

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
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
        if (zoomLevel > 0) {
            const event = 'touches' in e ? e.touches[0] : e as MouseEvent;

            setisDragging(true);

            setPrevDragPos({
                x: event.clientX,
                y: event.clientY
            }); 
        }
    }

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
        const event = 'touches' in e ? e.touches[0] : e as MouseEvent;

        if (isDragging) {
            // Difference between current mouse coordinates and previous mouse coordinates 
            const updateDx = dx + ((event.clientX - prevDragPos.x) * Math.min(window.devicePixelRatio, 2));
            const updateDY = dy + ((event.clientY - prevDragPos.y) * Math.min(window.devicePixelRatio, 2));

            // Update image position
            setDx(updateDx);
            setDy(updateDY);

            //Reset Prev Mouse coordinates
            setPrevDragPos({
                x: event.clientX,
                y: event.clientY
            });
        }
    }

    const handlePointerUp = () => {
        setisDragging(false);
    }

    return <canvas className={classes.photoViewer} ref={canvasRef} 
                onMouseDown={panningEnabled ? handlePointerDown : undefined} 
                onMouseMove={panningEnabled ? handlePointerMove : undefined} 
                onMouseUp={panningEnabled ? handlePointerUp : undefined}
                onTouchStart={panningEnabled ? handlePointerDown : undefined}
                onTouchMove={panningEnabled ? handlePointerMove : undefined}
                onTouchEnd={panningEnabled ? handlePointerUp : undefined}
                ></canvas>;
}

export default ImageCanvas;