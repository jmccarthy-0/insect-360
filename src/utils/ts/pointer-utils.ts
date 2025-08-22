import { PointerEvent } from "react";

export const calcDistance = (x1: number, y1: number, x2: number, y2: number) => {
    const a = x2 - x1;
    const b = y2 - y1;

    return Math.hypot(a,b);
}

export const calcPinchCenter = (event01: PointerEvent, event02: PointerEvent) => {
    return {
        x: (event01.clientX + event02.clientX) / 2,
        y: (event01.clientY + event02.clientY) / 2
    } 
}