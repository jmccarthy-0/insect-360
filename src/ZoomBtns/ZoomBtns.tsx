import Btn from "../Btn/Btn";

import btnClasses from '../Btn/Btn.module.css';
import Icon from "../Icon/Icon";
import classes from './ZoomBtns.module.css';

interface ZoomBtnsInterface {
    zoomLevel: number;
    setZoomLevel: (value: number | ((prevVar: number) => number)) => void;
}

const ZoomBtns = ({zoomLevel, setZoomLevel}: ZoomBtnsInterface) => {
    const increment = (val: number) => val + 0.5;
    const decrement = (val: number) => val - 0.5;
    const handleZoomClick = (isPositive: boolean) => {
        setZoomLevel(prevZoom => isPositive ? increment(prevZoom) : decrement(prevZoom));
    }

    return (
        <div className={classes['zoom-btns']}>
            <Btn classes={ `${btnClasses['btn--dark']} ${btnClasses['btn--square']}`} handleClick={() => { handleZoomClick(false) }} disabled={zoomLevel === 0}>
                <Icon icon={'zoom out'} />
            </Btn>
            <Btn classes={ `${btnClasses['btn--dark']} ${btnClasses['btn--square']}`} handleClick={() => { handleZoomClick(true) }} disabled={zoomLevel >= 1}>
                <Icon icon={'zoom in'} />
            </Btn>
        </div>
    );
};

export default ZoomBtns;