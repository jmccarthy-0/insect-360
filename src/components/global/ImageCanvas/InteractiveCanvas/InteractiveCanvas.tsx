import { useInteractiveCanvas } from '@hooks/useCanvas';

interface InteractiveCanvasProps {
    img: HTMLImageElement | ImageBitmap | null;
    zoomLevel: number;
}

const InteractiveCanvas = ({img, zoomLevel}: InteractiveCanvasProps) => {
    const { canvasRef, handlePointerDown, handlePointerMove, handlePointerUp } = useInteractiveCanvas(img, zoomLevel)

    return <canvas className={`w-full h-full bg-black ${zoomLevel > 0 ? 'cursor-move' : ''}`} ref={canvasRef}
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