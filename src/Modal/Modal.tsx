import { ReactNode } from "react";

import './Modal.css';

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
                <button className="modal-close" onClick={handleClose}>Close</button>
                {children}
            </div>
        </div>
    )
}

export default Modal;