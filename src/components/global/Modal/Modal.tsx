import { ReactNode, useState, useEffect } from "react";
import CloseBtn from "@components/global/Btn/CloseBtn";

interface ModalProps {
  children: ReactNode;
  id: string;
  setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  modalAdjustmentClasses?: string;
  animationDirection?: "none" | "left" | "right" | "fade";
  size?: "small" | "default";
  theme?: "default" | "light" | "dark";
}

const Modal = ({
  children,
  id,
  setOpen,
  modalAdjustmentClasses,
  animationDirection = "none",
  size = "default",
  theme = "default",
}: ModalProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const duration = animationDirection === "none" ? 0 : 10;

    const animationTimeout = setTimeout(() => {
      setIsActive(true);
    }, duration);

    document.body.classList.add("modal-open");

    return () => {
      document.body.classList.remove("modal-open");
      clearTimeout(animationTimeout);
    };
  }, []);

  const handleClose = () => {
    const duration = animationDirection === "none" ? 0 : 300; // Must match value in duration-* class

    setIsActive(false);

    setTimeout(() => {
      setOpen(false);
    }, duration);
  };

  // Allows customization of effect (direction, fade-in, etc.)
  const setAnimationStyles = () => {
    switch (animationDirection) {
      case "fade":
        return "translate-x-0 opacity-0";
      case "left":
        return "translate-x-full opacity-1";
      case "right":
        return "-translate-x-full opacity-1";
      default:
        return "translate-x-0 opacity-100";
    }
  };
  const animationStyles = setAnimationStyles();

  return (
    <div
      id={id}
      className={`fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/0 transition-colors duration-200 ease-linear
                ${isActive ? "bg-black/35" : ""}`}
    >
      <div
        className={`relative flex items-center justify-center transition-[transform,opacity] duration-300 motion-reduce:duration-0
                    ${isActive ? "translate-x-0 opacity-100" : animationStyles /* Added on mount to trigger animation */} 
                    ${modalAdjustmentClasses ? modalAdjustmentClasses : "" /* Any extra classes unique to the modal's usage context */}`}
      >
        <CloseBtn
          theme={theme}
          classes={`absolute z-20 ${size === "small" ? "top-2.5 right-2.5" : "top-page-y right-page-x"}`}
          handleClick={handleClose}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
