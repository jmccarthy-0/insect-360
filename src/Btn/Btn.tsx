import { ReactNode } from "react";

import btnClasses from './Btn.module.css';

interface BtnProps {
    children: ReactNode;
    handleClick: () => void;
    classes?: string;
    disabled?: boolean
}

const Btn = ({ children, classes, handleClick, disabled }: BtnProps) => {
    return (
        <button className={`${btnClasses['btn']} ${classes ? classes: ''}`} onClick={ handleClick } disabled={disabled || false}>
            { children }
        </button>
    )
}

export default Btn;