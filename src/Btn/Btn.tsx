import { ReactNode } from "react";

import btnClasses from './Btn.module.css';

interface BtnProps {
    children: ReactNode;
    handleClick: () => void;
    classes?: string;
    disabled?: boolean;
    ariaLabel?: string;
    ariaControls?: string;
}

const Btn = ({ children, classes, handleClick, disabled, ariaLabel, ariaControls }: BtnProps) => {
    return (
        <button className={`${btnClasses['btn']} ${classes ? classes: ''}`} 
            onClick={ handleClick } 
            disabled={disabled || false} 
            aria-label={ariaLabel || undefined}
            aria-controls={ariaControls || undefined}
        >
            { children }
        </button>
    )
}

export default Btn;