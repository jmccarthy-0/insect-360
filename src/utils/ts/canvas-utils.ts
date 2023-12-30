// Internal
const resizeCanvas = (canvas: HTMLCanvasElement, w: number, h: number) => {
    const device = Math.min(2, window.devicePixelRatio);

    canvas.width = w * device;
    canvas.height= h * device;
}

const getDefaultImgScale = (canvas: HTMLCanvasElement, img: HTMLImageElement | ImageBitmap) => {
    const scaleX = canvas.width / img.width;
    const scaleY = canvas.height / img.height;

    return Math.min(scaleX, scaleY);
}

const getImgCenterOffset = (canvas: HTMLCanvasElement, w: number, h: number, scale: number) => {
     // Get centered position
    const offsetX = (canvas.width - w * scale) / 2;
    const offsetY = (canvas.height - h * scale) / 2;

    return [offsetX, offsetY];
}

// Public
export const drawCanvas = (canvas: HTMLCanvasElement, img: HTMLImageElement | ImageBitmap, dx:number, dy:number, dw:number, dh:number, ) => {
    const ctx = canvas.getContext('2d');

    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, dx, dy, dw, dh);
    }
}

export const calculateCanvas = (img: HTMLImageElement | ImageBitmap, canvasElem: HTMLCanvasElement, zoomLevel: number) => {
    const scale = getDefaultImgScale(canvasElem, img) + zoomLevel;
    const dw = Math.min(img.width, img.width * scale);
    const dh = Math.min(img.height, img.height * scale);
    const [dx, dy] = getImgCenterOffset(canvasElem, dw, dh, 1);

    return { dx, dy, dw, dh };
}

export const initCanvas = (canvas: HTMLCanvasElement, img: HTMLImageElement | ImageBitmap, zoomLevel: number) => {
    resizeCanvas(canvas, canvas.clientWidth, canvas.clientHeight);
    const { dx, dy, dw, dh } = calculateCanvas(img, canvas, zoomLevel);
    drawCanvas(canvas, img, dx, dy, dw, dh);

    return { dx, dy, dw, dh };
}