import { ReactNode, useState, useEffect } from "react";
import CloseBtn from "../Btn/CloseBtn";

import btnClasses from '../Btn/Btn.module.css';
import classes from './Modal.module.css';

interface ModalProps {
    children: ReactNode;
    setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    modalAdjustmentClasses?: string;
    animationDirection?: 'none' | 'left' | 'right' | 'fade';
    size?: 'small' | 'default';
    theme?: 'default' | 'light' | 'dark';
}

const Modal = ({ children, setOpen, modalAdjustmentClasses, animationDirection='none', size='default', theme='default' }: ModalProps) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const duration = animationDirection === 'none' ? 0 : 10;

        const animationTimeout = setTimeout(() => {
            setIsActive(true);
        }, duration);

        return () => clearTimeout(animationTimeout);
    }, []);

    const handleClose = () => {
        const duration = animationDirection === 'none' ? 0 : 240; // Must match value in Modal.module.css

        setIsActive(false);

        setTimeout(() => {
            setOpen(false);
        }, duration);
    }

    return (
        <div className={
                            `${classes['modal']} 
                            ${isActive ? classes['modal--active'] : ''}
                            ${size !=='default' ? classes['modal--small']: ''}`
                        }>
            <div className={
                                `${ classes['modal-body'] /* Main modal classes*/}
                                ${ isActive ? classes['modal-body--active'] : '' /* Added on mount to trigger animation */ } 
                                ${ classes[`modal-body--animate-${animationDirection}`] /* Allows customization of effect (direction, fade-in, etc.) */ }  
                                ${ modalAdjustmentClasses ? modalAdjustmentClasses : '' /* Any extra classes unique to the modal's usage context */ }`
                            }>
                <CloseBtn classes={`${classes['modal-close']} ${theme !== 'default' ? btnClasses[`btn--${theme}`] : ''}`} handleClick={handleClose} /> 
                {children}
            </div>
        </div>
    )
}

export default Modal;