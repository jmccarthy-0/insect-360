import Btn from "./Btn";
import Icon from "../Icon/Icon";

import btnClasses from './Btn.module.css';

interface CloseBtnProps {
    handleClick: () => void;
    classes?: string;
}

const CloseBtn = ({ classes, handleClick }: CloseBtnProps) => {
    return (
        <Btn classes={`close-btn ${classes ? classes : ''}  ${btnClasses['btn--square']}`} handleClick={handleClick} ariaLabel="Close Modal">
            <Icon icon={'close'} />
        </Btn>
    )
}

export default CloseBtn;