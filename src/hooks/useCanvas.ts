import { useEffect, useRef, useCallback, MouseEvent, TouchEvent } from "react";
import { initCanvas, drawCanvas } from '@utils/ts/canvas-utils';

export const useInteractiveCanvas = (img: HTMLImageElement | ImageBitmap | null, zoomLevel: number) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasVals = useRef({
        dw: 0,
        dh: 0,
        dx: 0,
        dy: 0
    });

    // Window Resize
    const getHandleResize = useCallback(() => {
        if (canvasRef.current && img) {
            const canvas = canvasRef.current;
            const prevDims = {
                width: canvas.clientWidth,
                height: canvas.clientHeight
            }
    
            return () => {
                if (canvas.clientWidth !== prevDims.width || canvas.clientHeight !== prevDims.height) {
                    const { dx, dy, dw, dh } = initCanvas(canvas, img, zoomLevel);
                    canvasVals.current = { dx, dy, dw, dh };
    
                    prevDims.width = canvas.clientWidth;
                    prevDims.height = canvas.clientHeight;
                }
            }
        }

        return () => {};
    }, [img, zoomLevel]);

    useEffect(() => {
        const handleResize = getHandleResize();

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
          // Remove event listener on component unmount
          window.removeEventListener('resize', handleResize);
        };
    }, [getHandleResize]);



    // Dragging Calculations
    const prevDragPosition = {
        x: 0,
        y: 0 
    }
    let isDragging = false;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
        if (zoomLevel > 0) {
            const event = 'touches' in e ? e.touches[0] : e as MouseEvent;

            prevDragPosition.x = event.clientX;
            prevDragPosition.y = event.clientY;
            
            isDragging = true;
        }
    };
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
        const event = 'touches' in e ? e.touches[0] : e as MouseEvent;

        if (isDragging && canvasRef.current && img) {
            const canvas = canvasRef.current;
            
            // Difference between current mouse coordinates and previous mouse coordinates 
            const updateDx = canvasVals.current.dx + ((event.clientX - prevDragPosition.x) * Math.min(window.devicePixelRatio, 2));
            const updateDy = canvasVals.current.dy + ((event.clientY - prevDragPosition.y) * Math.min(window.devicePixelRatio, 2));

            // Update image position (constrain to edges of image)
            if (updateDx <= 0 && updateDx >= (canvas.offsetWidth - canvasVals.current.dw)) {
                canvasVals.current.dx = updateDx;
            } 
            if (updateDy <= 0 && updateDy >= (canvas.offsetHeight - canvasVals.current.dh)) {
                canvasVals.current.dy = updateDy; 
            } 

            // Update canvas
            const {dx, dy, dw, dh} = canvasVals.current;
            drawCanvas(canvas, img, dx, dy, dw, dh);

            //Reset Prev Mouse coordinates
            prevDragPosition.x = event.clientX;
            prevDragPosition.y = event.clientY;
            
        }
    };

    const handlePointerUp = () => {
        isDragging = false;
    };

    // General Initialization
    useEffect(() => {
        if (canvasRef.current && img) {
            const canvas = canvasRef.current;
    
            const { dx, dy, dw, dh } = initCanvas(canvas, img, zoomLevel);
            canvasVals.current = { dx, dy, dw, dh };
        }
    }, [img, zoomLevel]);

    return { canvasRef, handlePointerDown, handlePointerMove, handlePointerUp };
}