import { ReactNode } from "react";

interface BtnProps {
    children: ReactNode;
    handleClick: () => void;
    classes?: string;
}

const Btn = ({ children, classes, handleClick }: BtnProps) => {
    return (
        <button className={`${classes ? classes: ''}`} onClick={ handleClick }>
            { children }
        </button>
    )
}

export default Btn;