import Btn from "./Btn";
import Icon from "../Icon/Icon";

import btnClasses from './Btn.module.css';

interface InfoBtnProps {
    handleClick: () => void;
    classes?: string;
}

const InfoBtn = ({ classes, handleClick }: InfoBtnProps) => {
    return (
        <Btn classes={`${classes ? classes : ''} ${btnClasses['btn--dark']} ${btnClasses['btn--square']}`} handleClick={handleClick}>
            <Icon icon={'info'} />
        </Btn>
    )
}

export default InfoBtn;