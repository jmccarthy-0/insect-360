import { useEffect, useRef } from 'react';
import ImageCanvas from "@components/global/ImageCanvas/ImageCanvas"

interface DraggableCanvasProps {
    img: HTMLImageElement | ImageBitmap | null;
    zoomLevel?: number;
}

const DraggableCanvas = ({ img, zoomLevel }: DraggableCanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        console.log('Draggable Canvas: ', canvasRef.current);
    }, []);
    
    return (
        <ImageCanvas img={img} zoomLevel={zoomLevel} canvasRef={canvasRef} panningEnabled={true} />  
    )
}

export default DraggableCanvas;