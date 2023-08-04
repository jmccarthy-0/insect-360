import { ReactNode } from "react";

import './Btn.css';

interface BtnProps {
    children: ReactNode;
    handleClick: () => void;
    classes?: string;
    disabled?: boolean
}

const Btn = ({ children, classes, handleClick, disabled }: BtnProps) => {
    return (
        <button className={`btn ${classes ? classes: ''}`} onClick={ handleClick } disabled={disabled || false}>
            { children }
        </button>
    )
}

export default Btn;