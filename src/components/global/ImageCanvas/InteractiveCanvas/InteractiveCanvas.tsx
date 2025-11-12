import ZoomBtns from '@components/sequenceViewers/ZoomBtns/ZoomBtns';

import { useEffect, useRef } from 'react';
import { useGesture } from '@use-gesture/react';

import { InteractiveImageCanvas } from '@utils/ts/ImageCanvas';

interface InteractiveCanvasProps {
    img: HTMLImageElement | ImageBitmap | null;
}

const InteractiveCanvas = ({ img }: InteractiveCanvasProps) => {
    const canvasElemRef = useRef<null | HTMLCanvasElement>(null);
    const canvasRef = useRef<null | InteractiveImageCanvas>(null);

    const bindGesture = useGesture({
        onDrag: ({ delta, pinching, touches }) => {
            // Pinch takes precedent over drag
            if (pinching || touches > 1) {
                return;
            }

            if (canvasRef.current && !canvasRef.current.isAnimating) {
                canvasRef.current.handleDrag(delta);
            }
        },

        onPinch: ({ event, origin, delta }) => {
            event.preventDefault();

            if (canvasRef.current && !canvasRef.current.isAnimating) {
                canvasRef.current.handlePinch(delta[0], origin);
            }
        },
        onPinchEnd: () => {
            if (canvasRef.current && !canvasRef.current.isAnimating) {
                canvasRef.current.animateRecenter();
            }
        },
    });

    useEffect(() => {
        if (canvasElemRef.current && !canvasRef.current) {
            canvasRef.current = new InteractiveImageCanvas(
                canvasElemRef.current
            );
        }

        if (canvasRef.current && img) {
            canvasRef.current.img = img;
        }

        return () => {
            if (canvasRef.current) {
                canvasRef.current.destroy();
            }
        };
    }, [img]);

    return (
        <div className="h-dvh w-dvw overscroll-none">
            <ZoomBtns canvasRef={canvasRef} />
            <canvas
                className={`h-full w-full touch-none bg-primary-dark`}
                ref={canvasElemRef}
                {...bindGesture()}
            ></canvas>
        </div>
    );
};

export default InteractiveCanvas;
