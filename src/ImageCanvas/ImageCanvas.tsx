import {useState, useRef, useEffect, useCallback, MouseEvent, TouchEvent} from 'react';
import {resizeCanvas, refreshCanvas, getImgCenterOffset, getDefaultImgScale} from '../utils/canvas-utils';
import classes from './ImageCanvas.module.css';

interface PhotoCanvasProps {
    img: HTMLImageElement | ImageBitmap | null;
    zoomLevel?: number;
    panningEnabled?: boolean;
}

const ImageCanvas = ({img, zoomLevel = 0, panningEnabled = false}: PhotoCanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDragging, setisDragging] = useState(false);
    const [prevDragPos, setPrevDragPos] = useState({ x:0 , y:0});
    const [prevZoom, setPrevZoom] = useState(zoomLevel);

    const [dx, setDx] = useState(0); // Image offset x within the canvas
    const [dy, setDy] = useState(0); // Image offset y within the canvas
    const [dw, setDw] = useState(0); // Image width within the canvas
    const [dh, setDh] = useState(0); // Image height within the canvas
    const [canvasWidth, setCanvasWidth] = useState<number | null>(null);
    const [canvasHeight, setCanvasHeight] = useState<number | null>(null);

    const initCanvas = () => {
        if (img && canvasRef.current) {
            const canvas = canvasRef.current;
            const currentCanvasWidth = canvas.clientWidth;
            const currentCanvasHeight = canvas.clientHeight;
            if (zoomLevel !== prevZoom || currentCanvasWidth !== canvasWidth || currentCanvasHeight !== canvasHeight) {
                resizeCanvas(canvas, canvas.clientWidth, canvas.clientHeight);
                    
                const scale = getDefaultImgScale(canvas, img) + zoomLevel;
                const updateDw = Math.min(img.width, img.width * scale);
                const updateDh = Math.min(img.height, img.height * scale);
                const [updateDx, updateDy] = getImgCenterOffset(canvas, updateDw, updateDh, 1);
    
                setDw(updateDw);
                setDh(updateDh);
                setDx(updateDx);
                setDy(updateDy);
                setCanvasWidth(currentCanvasWidth);
                setCanvasHeight(currentCanvasHeight);
                setPrevZoom(zoomLevel);
            }
        }
    }

    // Set Image Scale
    useEffect(() => {    
        initCanvas();

        window.addEventListener('resize', initCanvas);

        return () => {
            window.removeEventListener('resize', initCanvas);
        }
    }, [img, zoomLevel]);

    // Redraw canvas when dx/dy coordinates change
    useEffect(() => {
        if (img && canvasRef.current) {
            refreshCanvas(canvasRef.current, img, dx, dy, dw, dh);
        }
    }, [img, dx, dy, dw, dh]);

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

        if (isDragging && canvasRef.current) {
            const canvas = canvasRef.current;
            
            // Difference between current mouse coordinates and previous mouse coordinates 
            const updateDx = dx + ((event.clientX - prevDragPos.x) * Math.min(window.devicePixelRatio, 2));
            const updateDy = dy + ((event.clientY - prevDragPos.y) * Math.min(window.devicePixelRatio, 2));

            // Update image position (constrain to edges of image)
            updateDx <= 0 && updateDx >= (canvas.offsetWidth - dw) && setDx(updateDx);
            updateDy <= 0 && updateDy >= (canvas.offsetHeight - dh) && setDy(updateDy); 

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

    const handlePointerLeave = () => {
        setisDragging(false);
    }

    return <canvas className={classes['img-canvas']} ref={canvasRef} 
                onMouseDown={panningEnabled ? handlePointerDown : undefined} 
                onMouseMove={panningEnabled ? handlePointerMove : undefined} 
                onMouseUp={panningEnabled ? handlePointerUp : undefined}
                onTouchStart={panningEnabled ? handlePointerDown : undefined}
                onTouchMove={panningEnabled ? handlePointerMove : undefined}
                onTouchEnd={panningEnabled ? handlePointerUp : undefined}
                onPointerLeave={panningEnabled ? handlePointerLeave : undefined}
                ></canvas>;
}

export default ImageCanvas;