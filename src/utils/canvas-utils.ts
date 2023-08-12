export const resizeCanvas = (canvas: HTMLCanvasElement, w: number, h: number) => {
    const device = Math.min(2, window.devicePixelRatio);

    canvas.width = w * device;
    canvas.height= h * device;
}

export const getDefaultImgScale = (canvas: HTMLCanvasElement, img: HTMLImageElement) => {
    const scaleX = canvas.width / img.width;
    const scaleY = canvas.height / img.height;

    // Contain
    console.log('scale: ', Math.min(scaleX, scaleY));


    return Math.min(scaleX, scaleY);
}

export const getImgCenterOffset = (canvas: HTMLCanvasElement, w: number, h: number, scale: number) => {
     // Get centered position
    const offsetX = (canvas.width - w * scale) / 2;
    const offsetY = (canvas.height - h * scale) / 2;

    return [offsetX, offsetY];
}

/**
 *  Draw image to canvas 
 * @param ctx 
 * @param canvas 
 * @param img 
 */
export const refreshCanvas = (ctx: CanvasRenderingContext2D , canvas: HTMLCanvasElement, img: HTMLImageElement, crop: 'cover' | 'contain') => {
    // Get Scale Factor
    const scale = getImgScale(canvas, img, crop);

    // Get centered position
    const [offsetX, offsetY] = getImgCenterOffset(canvas, img, scale)

    ctx?.clearRect(0, 0, canvas.width, canvas.height);

    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
    // drawImage(image, dx, dy, dWidth, dHeight)
    ctx?.drawImage(img, offsetX, offsetY, img.width * scale, img.height * scale);
}