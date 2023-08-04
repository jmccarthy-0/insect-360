import Btn from "../Btn/Btn";
import classes from './ZoomBtns.module.css';

interface ZoomBtnsInterface {
    zoomLevel: number;
    setZoomLevel: (value: number | ((prevVar: number) => number)) => void;
}

const ZoomBtns = ({zoomLevel, setZoomLevel}: ZoomBtnsInterface) => {
    const increment = (val: number) => val + 1;
    const decrement = (val: number) => val - 1;
    const handleZoomClick = (isPositive: boolean) => {
        setZoomLevel(prevZoom => isPositive ? increment(prevZoom) : decrement(prevZoom));
    }

    return (
        <div className={classes.zoomBtns}>
            <Btn classes={'btn--round'} handleClick={() => { handleZoomClick(true) }} disabled={zoomLevel > 0}>+</Btn>
            <Btn classes={'btn--round'} handleClick={() => { handleZoomClick(false) }} disabled={zoomLevel === 0}>-</Btn>
        </div>
    );
};

export default ZoomBtns;