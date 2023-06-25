import { ReactNode } from "react";

import './Modal.css';
import CloseBtn from "../Btn/CloseBtn";

interface ModalProps {
    children: ReactNode;
    setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    modalAdjustmentClasses?: string
}

const Modal = ({ children, setOpen, modalAdjustmentClasses }: ModalProps) => {
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="modal-underlay">
            <div className={`modal-body ${modalAdjustmentClasses ? modalAdjustmentClasses : ''}`}>
                <CloseBtn classes="modal-close btn--round" handleClick={handleClose} /> 
                {children}
            </div>
        </div>
    )
}

export default Modal;