export const resizeCanvas = (canvas: HTMLCanvasElement, w: number, h: number) => {
    const device = Math.min(2, window.devicePixelRatio);

    canvas.width = w * device;
    canvas.height= h * device;
}

export const refreshCanvas = (canvas: HTMLCanvasElement, img: HTMLImageElement | ImageBitmap, dx:number, dy:number, dw:number, dh:number, ) => {
    const ctx = canvas.getContext('2d');

    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, dx, dy, dw, dh);
    }
}

export const getDefaultImgScale = (canvas: HTMLCanvasElement, img: HTMLImageElement | ImageBitmap) => {
    const scaleX = canvas.width / img.width;
    const scaleY = canvas.height / img.height;

    return Math.min(scaleX, scaleY);
}

export const getImgCenterOffset = (canvas: HTMLCanvasElement, w: number, h: number, scale: number) => {
     // Get centered position
    const offsetX = (canvas.width - w * scale) / 2;
    const offsetY = (canvas.height - h * scale) / 2;

    return [offsetX, offsetY];
}