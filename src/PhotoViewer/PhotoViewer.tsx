import { useEffect, useRef, useState, useMemo } from 'react';
import { useSingleImageLoader } from '../hooks/singleImageLoader';


import { resizeCanvas, refreshCanvas } from '../utils/canvas-utils';
import classes from './PhotoViewer.module.css';
import ImageCanvas from './PhotoCanvas';

interface PhotoViewerProps {
    zoomLevel: number;
}

/**
 * Component-specific version of canvas resize utiltiy
 *  
 * @param canvas 
 * @returns Canvas utility function
 */
const resizePhotoViewerCanvas = (canvas: HTMLCanvasElement) => {
    return resizeCanvas(canvas, canvas.clientWidth, canvas.clientHeight);
};


const PhotoViewer = ({ zoomLevel }: PhotoViewerProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const img = useSingleImageLoader('/hi-res/29540763125_daca6ae7f7_o.jpg');

    console.log({img})


    useEffect(() => {
        let handleResize: (event: Event) => void;

        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            if (ctx) {
                const updatePhotoViewerCanvas = () => {
                    resizePhotoViewerCanvas(canvas);
                    //refreshCanvas(ctx, canvas, img, zoomLevel === 1 ? 'cover' : 'contain');
                }

                /**
                 * Event Listener to update canvas dimensions and trigger redraw on resize 
                 */
                handleResize = (_) => {
                    updatePhotoViewerCanvas();
                }
                window.addEventListener('resize', handleResize);
                

            
            }
        }

        return () => {
            // Kill canvas resize event listener
            window.removeEventListener('resize', handleResize)
        };
    }, []);

    return (   
        <ImageCanvas img={img} zoomLevel={zoomLevel} />
    )
}

export default PhotoViewer;