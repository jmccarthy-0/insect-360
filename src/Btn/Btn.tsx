import { ReactNode } from "react";

import btnClasses from './Btn.module.css';

interface BtnProps {
    children: ReactNode;
    handleClick: () => void;
    classes?: string;
    disabled?: boolean;
    ariaLabel?: string;
}

const Btn = ({ children, classes, handleClick, disabled, ariaLabel }: BtnProps) => {
    return (
        <button className={`${btnClasses['btn']} ${classes ? classes: ''}`} onClick={ handleClick } disabled={disabled || false} aria-label={ariaLabel || undefined}>
            { children }
        </button>
    )
}

export default Btn;