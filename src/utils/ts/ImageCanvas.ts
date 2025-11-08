// Animation constants
const ACCELERATION = 1.1;
const MAXVELOCITY = 0.03


export class ImageCanvas {
    // Types
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

    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this._ctx = canvas.getContext("2d");
        this._img = null;
        this._zoomBaseline = -1;
        
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
            this._state.dx = (this._canvas.width - this._state.dw) / 2;
            this._state.dy = (this._canvas.height - this._state.dh) / 2;
        }
    }


    /**
     * Sets internal canvas dimensions. Will double the w and h values if DPR is
     * greater than 1.
     */
    resize(w: number, h: number) {
        const device = Math.min(2, window.devicePixelRatio);

        this._canvas.width = w * device;
        this._canvas.height = h * device;
    }

    refresh() {
        this.updateDrawDimensions();
        this.updateDrawPosition();

        console.log('Drawing at:', {
            dw: this._state.dw,
            dh: this._state.dh,
            dx: this._state.dx,
            dy: this._state.dy,
            zoom: this._state.zoom,
            cw: this._canvas.width,
            ch: this._canvas.height
        })

        this.draw();
    }


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

    destroy() {
        this._resizeObserver.disconnect();
    }
}

export class InteractiveImageCanvas extends ImageCanvas {
    constructor(canvas: HTMLCanvasElement) {
        super(canvas);
    }

    staticZoomIn() {
        this._state.zoom = 1;
            

        // Update canvas
        this.refresh();

    }

    staticZoomOut() {
        this._state.zoom = this._zoomBaseline;
        
        // Update canvas
        this.refresh();
    }

    animateZoomIn() {
        this.animateZoom(this._state.zoom, 1, 0.005);
    }

    animateZoomOut() {
        this.animateZoom(this._state.zoom, this._zoomBaseline, 0.005);
    }

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

    zoomIn(delta: number, target: number) {
        if (this._state.zoom < target) {
            this._state.prevZoom = this._state.zoom;
            this._state.zoom += delta;
            
            if (this._state.zoom > target) {
                this._state.zoom = target
            }
        }
        // Update canvas
    }

    zoomOut(delta: number, target: number) {
        if (this._state.zoom > target) {
            this._state.prevZoom = this._state.zoom;
            this._state.zoom -= delta;
            
            if (this._state.zoom < target) {
                this._state.zoom = target
            }
        }
    }
}