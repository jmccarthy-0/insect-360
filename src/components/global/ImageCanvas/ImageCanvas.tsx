import InteractiveCanvas from "./InteractiveCanvas/InteractiveCanvas";
import StaticCanvas from "./StaticCanvas/StaticCanvas";

interface ImageCanvasProps {
  img: HTMLImageElement | ImageBitmap | null;
  zoomLevel?: number;
  isInteractive?: boolean;
}

const ImageCanvas = ({
  img,
  zoomLevel = 0,
  isInteractive = false,
}: ImageCanvasProps) => {
  return isInteractive ? (
    <InteractiveCanvas img={img} zoomLevel={zoomLevel} />
  ) : (
    <StaticCanvas img={img} />
  );
};

export default ImageCanvas;
