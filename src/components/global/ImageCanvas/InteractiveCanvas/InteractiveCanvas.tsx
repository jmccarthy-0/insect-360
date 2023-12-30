import { useInteractiveCanvas } from '@hooks/useCanvas';

import CanvasStyles from '../ImageCanvas.module.css';


interface InteractiveCanvasProps {
    img: HTMLImageElement | ImageBitmap | null;
    zoomLevel: number;
}

const InteractiveCanvas = ({img, zoomLevel}: InteractiveCanvasProps) => {
    const { canvasRef, handlePointerDown, handlePointerMove, handlePointerUp } = useInteractiveCanvas(img, zoomLevel)

    return <canvas className={`${CanvasStyles['img-canvas']} ${zoomLevel > 0 ? CanvasStyles['img-canvas--dragging'] : ''}`} ref={canvasRef}
                onMouseDown={handlePointerDown} 
                onMouseMove={handlePointerMove} 
                onMouseUp={handlePointerUp}
                onTouchStart={handlePointerDown}
                onTouchMove={handlePointerMove}
                onTouchEnd={handlePointerUp}
                onPointerLeave={handlePointerUp}
            ></canvas>;
}

export default InteractiveCanvas;