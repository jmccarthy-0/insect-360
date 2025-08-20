import { useCallback, useEffect, useRef } from "react";
import { initCanvas } from "@utils/ts/canvas-utils";
import { ImageCanvas } from "@utils/ts/ImageCanvas";

interface StaticCanvasProps {
  img: HTMLImageElement | ImageBitmap | null;
}

const StaticCanvas = ({ img }: StaticCanvasProps) => {
  const canvasElemRef = useRef<null | HTMLCanvasElement>(null);
  const canvasRef = useRef<null | ImageCanvas>(null)

  useEffect(() => {
    if (canvasElemRef.current && !canvasRef.current) {
      canvasRef.current = new ImageCanvas(canvasElemRef.current);
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

  return <canvas className="h-full w-full bg-black" ref={canvasElemRef}></canvas>;
};

export default StaticCanvas;
