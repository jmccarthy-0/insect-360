import { gsap } from "gsap";
import { Vector2 } from "@use-gesture/react";

// Animation constants
const ACCELERATION = 1.1;
const MAXVELOCITY = 0.03


export class ImageCanvas {
    // Types
    //Private
    _canvas: HTMLCanvasElement
    _ctx:  CanvasRenderingContext2D | null
    _img: HTMLImageElement | ImageBitmap | null
    _state: {
        dw: number
        dh: number
        dx: number
        dy: number
        zoom: number
        prevZoom: number
    }
    _resizeObserver: ResizeObserver;
    _zoomBaseline: number
    _device: number

    // Public
    isAnimating: boolean

    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this._ctx = canvas.getContext("2d");
        this._img = null;
        this._zoomBaseline = -1;
        this._device = Math.min(2, window.devicePixelRatio)

        this.isAnimating = false
        
        this.resize(this._canvas.clientWidth, this._canvas.clientHeight);
        
        this._state = {
            dw: 0,
            dh: 0,
            dx: 0,
            dy: 0,
            zoom: -1,
            prevZoom: -1
        }


        this._resizeObserver = new ResizeObserver(() => {
            this.resize(this._canvas.clientWidth, this._canvas.clientHeight);
            this._zoomBaseline = this._state.zoom = this.calculateDefaultZoom();
            this.refresh();
        })
        this._resizeObserver.observe(canvas)
    }

    set img(img: HTMLImageElement | ImageBitmap) {
        // Update image
        this._img = img;

        // Constrain to canvas
        this._zoomBaseline = this._state.zoom = this._state.prevZoom = this.calculateDefaultZoom();

        // Display
        this.refresh();
    }

    calculateDefaultZoom() {
        if (!this._img) {
            return 1;
        }
       
        const scaleX = this._canvas.width / this._img.width;
        const scaleY = this._canvas.height / this._img.height;

        return Math.min(scaleX, scaleY);
        
    };

    updateDrawDimensions() {
        if (this._img) {
            this._state.dw = this._img.width * this._state.zoom
            this._state.dh = this._img.height * this._state.zoom
        }
    }

    updateDrawPosition(mid?: {x: number, y:number}) {
        if (mid) {
            /*
                User pinch:
                Image needs to scale and transform from the relative pinch 
                center

                dx2 = px - ((px-dx1) * (scale2/scale1))

                dx2 = new offset
                dx1 = initial (current offset)
                scale2 = new (current) zoom
                scale1 = initial (previous) zoom
                px = canvas point to stay centered in (px,py)

            */
            const zoomFactor = this._state.zoom / this._state.prevZoom

            let px, py;

            px = mid.x;
            py = mid.y;

            this._state.dx = px - (px - this._state.dx) * zoomFactor
            this._state.dy = py - (py - this._state.dy) * zoomFactor
        } else {
            // Image scales and transforms from middle of canvas
            this._state.dx = (this._canvas.width - this._state.dw) / 2;
            this._state.dy = (this._canvas.height - this._state.dh) / 2;
        }
    }


    /**
     * Sets internal canvas dimensions. Will double the w and h values if DPR is
     * greater than 1.
     */
    resize(w: number, h: number) {
        this._canvas.width = w * this._device;
        this._canvas.height = h * this._device;
    }

    /**
     * Draw the current image on the canvas
     */
    draw() {
        try {
            if (this._img) {
                this._ctx?.clearRect(0, 0, this._canvas.width, this._canvas.height);
                this._ctx?.drawImage(
                    this._img, 
                    this._state.dx, 
                    this._state.dy, 
                    this._state.dw, 
                    this._state.dh
                );
            }
        } catch(err) {
            console.error(err);
        }
    }

    /**
     * Bundled action for updating image position/scale and drawing the image
     * 
     * @param origin: The midpoint of a user pinch gesture, used for ensuring
     * image scales from the relative pinch center rather than the canvas center
     */
    refresh(origin?: Vector2) {
        this.updateDrawDimensions();
        this.updateDrawPosition(
            origin ? 
            {x: origin[0], y: origin[1]} : 
            undefined
        );
        this.draw();
    }

    destroy() {
        this._resizeObserver.disconnect();
    }
}

export class InteractiveImageCanvas extends ImageCanvas {
    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
    }


    /**
     * Jump canvas to max zoom, no animation
     */
    staticZoomIn() {
        this._state.zoom = 1;
            
        // Update canvas
        this.refresh();

    }

    /**
     * Jump canvas to min zoom, no animation
     */
    staticZoomOut() {
        this._state.zoom = this._zoomBaseline;
        
        // Update canvas
        this.refresh();
    }

    /**
     * Animated zoom to max zoom
     */
    animateZoomIn() {
        this.animateZoom(this._state.zoom, 1, 0.005);
    }

    /**
     * Animated zoom to min zoom
     */
    animateZoomOut() {
        this.animateZoom(this._state.zoom, this._zoomBaseline, 0.005);
    }

    /**
     * Animation loop for zooming
     */
    animateZoom(from: number, to: number, velocity: number) {        
        if (from < to) {
             this.zoomIn(velocity, to);
        } else if (from > to) {
            this.zoomOut(velocity, to);
        }

        this.refresh();

        if (this._state.zoom !== to) {
            let newVelocity = velocity;

            if (newVelocity < MAXVELOCITY) {
                newVelocity *= ACCELERATION;
            }

            if (newVelocity > MAXVELOCITY) {
                newVelocity = MAXVELOCITY;
            }
        
            window.requestAnimationFrame(() => {
                this.animateZoom(from, to, newVelocity)
            })
        }
    }

    /**
     * Repositions image within the canvas if a user gesture places the image
     * out of viewing bounds (typically caused by a pinch zoom)
     */
    animateRecenter() {
        let needsAnimate = false;

        let targetX = this._state.dx;
        let targetY = this._state.dy;
        const centerX  = (this._canvas.width - this._state.dw) / 2;
        const centerY = (this._canvas.height - this._state.dh) / 2;

        // Horizontal
        if (this._state.dw >= this._canvas.width) {
            if (this._state.dx > 0) {
                targetX = 0;
                needsAnimate = true;
            } else if (this._state.dx < this._canvas.width - this._state.dw) {
                targetX = this._canvas.width - this._state.dw;
                needsAnimate = true;
            }
        } else {
            targetX = centerX;
            needsAnimate = true;
        }

        // Vertical
        if (this._state.dh >= this._canvas.height) {
            if (this._state.dy > 0) {
                targetY = 0;
                needsAnimate = true;
            } else if (this._state.dy < this._canvas.height - this._state.dh) {
                targetY = this._canvas.height - this._state.dh;
                needsAnimate = true;
            }
        } else {
            targetY = centerY;
            needsAnimate = true;
        }

        if (needsAnimate) {
            this.isAnimating = true;

            gsap.killTweensOf(this._state);
            gsap.to(this._state, {
                duration: 1,
                dx: targetX,
                dy: targetY,
                ease: "power2.out",
                onUpdate: () => this.draw(),
                onComplete: () => { this.isAnimating = false; }
            });
        }
    }

    /**
     * Increase the current zoom level by the given delta
     */
    zoomIn(delta: number, target=1) {
        if (this._state.zoom < target) {
            this._state.prevZoom = this._state.zoom;
            this._state.zoom += delta;
            
            if (this._state.zoom > target) {
                this._state.zoom = target
            }
        }
    }

    /**
     * Decrease the current zoom level by the given delta
     */
    zoomOut(delta: number, target=this._zoomBaseline) {
        if (this._state.zoom > target) {
            this._state.prevZoom = this._state.zoom;
            this._state.zoom -= delta;
            
            if (this._state.zoom < target) {
                this._state.zoom = target
            }
        }
    }

    /**
     * Action for panning an image within the canvas on user drag
     */
    handleDrag([offsetX, offsetY]: Vector2) {
        if (this._state.dw > this._canvas.width) {
            this._state.dx += offsetX * this._device;
            
            if (this._state.dx < this._canvas.width - this._state.dw) {
                this._state.dx = this._canvas.width - this._state.dw;
            } else if (this._state.dx > 0) {
                this._state.dx = 0;
            }
        }

        if (this._state.dh > this._canvas.height) {
            this._state.dy += offsetY * this._device;
            
            if (this._state.dy < this._canvas.height - this._state.dh) {
                this._state.dy = this._canvas.height - this._state.dh;
            } else if (this._state.dy > 0) {
                this._state.dy = 0;
            }
        }

        
        window.requestAnimationFrame(() => {
            this.draw();
        })
    }

    /**
     * Action for zooming the image in/out on user pinch
     */
    handlePinch(pinchDelta: number, origin: Vector2) {
        const cappedDelta = Math.min(Math.abs(pinchDelta), .02);

        window.requestAnimationFrame(() => {
            if (pinchDelta < 0 && this._state.zoom > this._zoomBaseline) {
                this.zoomOut(cappedDelta)
                this.refresh(origin);
            } else if (pinchDelta > 0 && this._state.zoom < 1) {
                this.zoomIn(cappedDelta)
                this.refresh(origin);
            }

        })
    }
}