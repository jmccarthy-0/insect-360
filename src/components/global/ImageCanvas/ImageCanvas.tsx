import {useCallback} from 'react';
import { initCanvas } from '@utils/ts/canvas-utils';
import classes from './ImageCanvas.module.css';
import { useInteractiveCanvas } from '@hooks/useCanvas';

interface ImageCanvasProps {
    img: HTMLImageElement | ImageBitmap | null;
    zoomLevel?: number;
    isInteractive?: boolean;
}

const ImageCanvas = ({ img, zoomLevel=0, isInteractive=false }: ImageCanvasProps) => {
    // Interactive: Uses hooks to handle zoom and positioning
    if (isInteractive) {
        const { canvasRef, handlePointerDown, handlePointerMove, handlePointerUp } = useInteractiveCanvas(img, zoomLevel)

        return <canvas className={classes['img-canvas']} ref={canvasRef}
                    onMouseDown={handlePointerDown} 
                    onMouseMove={handlePointerMove} 
                    onMouseUp={handlePointerUp}
                    onTouchStart={handlePointerDown}
                    onTouchMove={handlePointerMove}
                    onTouchEnd={handlePointerUp}
                    onPointerLeave={handlePointerUp}
                ></canvas>;
    }

    // Non-interactive: only needs to be aware of its resize
    let handleResize: () => void;

    const canvasRef = useCallback((canvas: HTMLCanvasElement) => {
        if (canvas && img) {
            initCanvas(canvas, img, zoomLevel);

            const prevDims = {
                width: canvas.clientWidth,
                height: canvas.clientHeight
            }

            handleResize = () => {
                if (canvas.clientWidth !== prevDims.width || canvas.clientHeight !== prevDims.height) {
                    initCanvas(canvas, img, zoomLevel);

                    prevDims.width = canvas.clientWidth;
                    prevDims.height = canvas.clientHeight;
                }
            }

            window.addEventListener('resize', handleResize);
        } else {
            window.removeEventListener('resize', handleResize);
        }
    }, [img, zoomLevel, isInteractive]);

    return <canvas className={classes['img-canvas']} ref={canvasRef}></canvas>;
}

export default ImageCanvas;