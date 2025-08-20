
export class ImageCanvas {
    // Types
    private _canvas: HTMLCanvasElement
    private _ctx:  CanvasRenderingContext2D | null
    private _img: HTMLImageElement | ImageBitmap | null
    private _state: {
        dw: number
        dh: number
        dx: number
        dy: number
        zoom: number
    }
    private _resizeObserver: ResizeObserver;

    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this._ctx = canvas.getContext("2d");
        this._img = null;
        
        this.resize(this._canvas.clientWidth, this._canvas.clientHeight);
        
        this._state = {
            dw: 0,
            dh: 0,
            dx: 0,
            dy: 0,
            zoom: this.calculateDefaultZoom()
        }


        this._resizeObserver = new ResizeObserver(() => {
            this.resize(this._canvas.clientWidth, this._canvas.clientHeight);
            this._state.zoom = this.calculateDefaultZoom();
            this.refresh();
        })
        this._resizeObserver.observe(canvas)
    }

    set img(img: HTMLImageElement | ImageBitmap) {
        // Update image
        this._img = img;

        // Constrain to canvas
        this._state.zoom = this.calculateDefaultZoom();
        this.setDrawDimensions();

        // Display
        this.refresh();
    }

    private calculateDefaultZoom() {
        if (!this._img) {
            return 1;
        }
       
        const scaleX = this._canvas.width / this._img.width;
        const scaleY = this._canvas.height / this._img.height;

        return Math.min(scaleX, scaleY);
        
    };

    private setDrawDimensions() {
        this._state.dw *= this._state.zoom;
        this._state.dh *= this._state.zoom;
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
}