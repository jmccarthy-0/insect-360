import { ReactNode } from "react";

interface BtnProps {
    children: ReactNode;
    handleClick: () => void;
    classes?: string;
    theme?: 'default' | 'dark' | 'light';
    shape?: 'default' | 'square'
    disabled?: boolean;
    ariaLabel?: string;
    ariaControls?: string;
}

const Btn = ({ children, classes, theme='default', shape='default', handleClick, disabled, ariaLabel, ariaControls }: BtnProps) => {
    const generateBtnTheme = () => {
        switch(theme) {
            case 'dark':
                return 'bg-transparent text-primary-light border-primary-light hover:bg-primary-light hover:text-primary-dark'
            case 'light':
                return 'bg-transparent text-primary-dark border-primary-dark hover:bg-primary-dark hover:text-primary-light';
            default: 
                return 'bg-transparent text-primary-dark border-primary-dark hover:bg-primary-dark hover:text-primary-light dark:text-primary-light dark:border-primary-light dark:hover:bg-primary-light dark:hover:text-primary-dark';
        }
    }

    const generateBtnShape = () => {
        if (shape === 'square') {
            return 'w-12 h-12 p-0 flex-shrink-0 flex-grow-0 basis-auto';
        }

        return 'w-60 h-12 py-0 px-8';
    }

    return (
        <button className={`flex justify-center items-center max-w-full border cursor-pointer transition-colors duration-300 ${generateBtnTheme()} ${generateBtnShape()} ${classes ? classes: ''} [&_svg]:fill-current [&_svg]:stroke-current [&_svg]:w-7 [&_svg]:h-7`} 
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