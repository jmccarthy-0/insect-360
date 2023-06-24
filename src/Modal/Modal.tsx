import { ReactNode } from "react";

import './Modal.css';
import CloseBtn from "../Btn/CloseBtn";

interface ModalProps {
    children: ReactNode;
    setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const Modal = ({ children, setOpen }: ModalProps) => {
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="modal-underlay">
            <div className="modal-body">
                <CloseBtn classes="modal-close" handleClick={handleClose} /> 
                {children}
            </div>
        </div>
    )
}

export default Modal;