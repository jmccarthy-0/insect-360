import Btn from "./Btn";
import Icon from "../Icon/Icon";

import btnClasses from './Btn.module.css';

interface ExpandBtnProps {
    handleClick: () => void;
    classes?: string;
}

const ExpandBtn = ({ classes, handleClick }: ExpandBtnProps) => {
    return (
        <Btn classes={`${classes ? classes : ''} ${btnClasses['btn--dark']}  ${btnClasses['btn--square']}`} handleClick={handleClick} ariaLabel="Expand Image">
            <Icon icon={'expand'} />
        </Btn>
    )
}

export default ExpandBtn;