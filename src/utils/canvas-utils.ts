export const resizeCanvas = (canvas: HTMLCanvasElement, w: number, h: number) => {
    const device = Math.min(2, window.devicePixelRatio);

    canvas.width = w * device;
    canvas.height= h * device;
}

export const getImgScale = (canvas: HTMLCanvasElement, img: HTMLImageElement, crop: 'cover' | 'contain') => {
    const scaleX = canvas.width / img.width;
    const scaleY = canvas.height / img.height;

    // Cover
    if (crop === 'cover') {
        return Math.max(scaleX, scaleY);
    }

    // Contain
    return Math.min(scaleX, scaleY);
}

export const getImgCenterOffset = (canvas: HTMLCanvasElement, img: HTMLImageElement, scale: number) => {
     // Get centered position
    const offsetX = (canvas.width - img.width * scale) / 2;
    const offsetY = (canvas.height - img.height * scale) / 2;

    return [offsetX, offsetY];
}

/**
 *  Draw image to canvas 
 * @param ctx 
 * @param canvas 
 * @param img 
 */
export const refreshCanvas = (ctx: CanvasRenderingContext2D , canvas: HTMLCanvasElement, img: HTMLImageElement) => {
    // Get Scale Factor
    const scale = getImgScale(canvas, img, 'contain');

    // Get centered position
    const [offsetX, offsetY] = getImgCenterOffset(canvas, img, scale)

    ctx?.clearRect(0, 0, canvas.width, canvas.height);
    ctx?.drawImage(img, offsetX, offsetY, img.width * scale, img.height * scale);
}