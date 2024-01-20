import Btn from "@components/global/Btn/Btn";
import Icon from "@components/global/Icon/Icon";

interface ZoomBtnsInterface {
  zoomLevel: number;
  setZoomLevel: (value: number | ((prevVar: number) => number)) => void;
}

const ZoomBtns = ({ zoomLevel, setZoomLevel }: ZoomBtnsInterface) => {
  const increment = (val: number) => val + 0.5;
  const decrement = (val: number) => val - 0.5;
  const handleZoomClick = (isPositive: boolean) => {
    setZoomLevel((prevZoom) =>
      isPositive ? increment(prevZoom) : decrement(prevZoom),
    );
  };

  return (
    <div className="absolute bottom-[2dvh] right-page-x inline-flex min-w-40 justify-end gap-4">
      <Btn
        theme="dark"
        shape="square"
        handleClick={() => {
          handleZoomClick(false);
        }}
        disabled={zoomLevel === 0}
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
        disabled={zoomLevel === 0.5}
        ariaLabel="Zoom In"
      >
        <Icon icon={"zoom in"} />
      </Btn>
    </div>
  );
};

export default ZoomBtns;
