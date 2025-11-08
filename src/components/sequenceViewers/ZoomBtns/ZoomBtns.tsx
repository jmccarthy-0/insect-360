import { MutableRefObject } from "react";
import Btn from "@components/global/Btn/Btn";
import Icon from "@components/global/Icon/Icon";

import { InteractiveImageCanvas } from "@utils/ts/ImageCanvas";


interface ZoomBtnsInterface {
  canvasRef: MutableRefObject<InteractiveImageCanvas | null>;
}

const ZoomBtns = ({ canvasRef }: ZoomBtnsInterface) => {
  const handleZoomClick = (isPositive: boolean) => {
    if (canvasRef.current) {
      if (window.matchMedia('(prefers-reduced-motion: reduce').matches) {
        isPositive ? 
          canvasRef.current.staticZoomIn() : 
          canvasRef.current.staticZoomOut();
      } else {
        isPositive ? 
          canvasRef.current.animateZoomIn() : 
          canvasRef.current.animateZoomOut();
      }
    }
  };

  return (
    <div className="absolute bottom-[2dvh] right-page-x inline-flex min-w-40 justify-end gap-4">
      <Btn
        theme="dark"
        shape="square"
        handleClick={() => {
          handleZoomClick(false);
        }}
        disabled={false}
        ariaLabel="Zoom Out"
      >
        <Icon icon={"zoom out"} />
      </Btn>
      <Btn
        theme="dark"
        shape="square"
        handleClick={() => {
          handleZoomClick(true);
        }}
        disabled={false}
        ariaLabel="Zoom In"
      >
        <Icon icon={"zoom in"} />
      </Btn>
    </div>
  );
};

export default ZoomBtns;
