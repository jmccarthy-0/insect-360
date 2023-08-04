import { useEffect, useRef } from 'react';
import { resizeCanvas, refreshCanvas } from '../utils/canvas-utils';
import classes from './PhotoViewer.module.css';
import Btn from '../Btn/Btn';

interface PhotoViewerProps {
    imgFileIndex: number;
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


const PhotoViewer = ({ imgFileIndex }: PhotoViewerProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let handleResize: (event: Event) => void;

        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const img = new Image();
            const ctx = canvas.getContext('2d');

            if (ctx) {
                const updatePhotoViewerCanvas = () => {
                    resizePhotoViewerCanvas(canvas);
                    refreshCanvas(ctx, canvas, img);
                }

                /**
                 * Event Listener to update canvas dimensions and trigger redraw on resize 
                 */
                handleResize = (_) => {
                    updatePhotoViewerCanvas();
                }
                window.addEventListener('resize', handleResize);
                

                /**
                 *   Update canvas dimensions and trigger redraw on image load 
                 *  */ 
                img.onload = () => {                    
                    updatePhotoViewerCanvas();
                }
                
                // imgFileIndex eventually used to load actual image based on active 360 viewer image. 
                console.log({ imgFileIndex }); 
                img.src = '/hi-res/29540763125_daca6ae7f7_o.jpg' // placeholder file
            }
        }

        return () => {
            // Kill canvas resize event listener
            window.removeEventListener('resize', handleResize)
        };
    }, []);

    return (   
        <canvas className={classes.photoViewer} ref={canvasRef}></canvas>
    )
}

export default PhotoViewer;