import { useCallback } from 'react';
import { initCanvas } from '@utils/ts/canvas-utils';

import CanvasStyles from '../ImageCanvas.module.css';

interface StaticCanvasProps {
    img: HTMLImageElement | ImageBitmap | null;
}

const StaticCanvas = ({img}: StaticCanvasProps) => {
    let handleResize: () => void;

    const canvasRef = useCallback((canvas: HTMLCanvasElement) => {
        if (canvas && img) {
            initCanvas(canvas, img, 0);

            const prevDims = {
                width: canvas.clientWidth,
                height: canvas.clientHeight
            }

            handleResize = () => {
                if (canvas.clientWidth !== prevDims.width || canvas.clientHeight !== prevDims.height) {
                    initCanvas(canvas, img, 0);

                    prevDims.width = canvas.clientWidth;
                    prevDims.height = canvas.clientHeight;
                }
            }

            window.addEventListener('resize', handleResize);
        } else {
            window.removeEventListener('resize', handleResize);
        }
    }, [img]);

    return <canvas className={CanvasStyles['img-canvas']} ref={canvasRef}></canvas>;
}

export default StaticCanvas;