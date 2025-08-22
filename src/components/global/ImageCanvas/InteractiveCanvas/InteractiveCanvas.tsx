import { useInteractiveCanvas } from "@hooks/useCanvas";
import { InteractiveImageCanvas } from "@utils/ts/ImageCanvas";
import { useEffect, useRef } from "react";

interface InteractiveCanvasProps {
  img: HTMLImageElement | ImageBitmap | null;
  zoomLevel: number;
}

const InteractiveCanvas = ({ img, zoomLevel }: InteractiveCanvasProps) => {
  // const { canvasRef, handlePointerDown, handlePointerMove, handlePointerUp } =
  //   useInteractiveCanvas(img, zoomLevel);
  const canvasElemRef = useRef<null | HTMLCanvasElement>(null);
  const canvasRef = useRef<null | InteractiveImageCanvas>(null)


  useEffect(() => {
      if (canvasElemRef.current && !canvasRef.current) {
        canvasRef.current = new InteractiveImageCanvas(canvasElemRef.current);
      }
  
      if (canvasRef.current && img) {
        canvasRef.current.img = img;
      }
  
      return () => {
        if (canvasRef.current) {
          canvasRef.current.destroy();
        }
      }
  }, [img])

  return (
    <canvas
      className={`h-full w-full bg-black ${zoomLevel > 0 ? "cursor-move" : ""}`}
      ref={canvasElemRef}
    ></canvas>
  );
};

export default InteractiveCanvas;
