import { ReactNode } from "react";

import './Btn.css';

interface BtnProps {
    children: ReactNode;
    handleClick: () => void;
    classes?: string;
}

const Btn = ({ children, classes, handleClick }: BtnProps) => {
    return (
        <button className={`btn ${classes ? classes: ''}`} onClick={ handleClick }>
            { children }
        </button>
    )
}

export default Btn;