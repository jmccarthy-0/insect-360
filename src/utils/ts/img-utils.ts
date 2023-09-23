export const getSpeciesImgSequenceUrl = (sid:string, activeImgIndex: number) => {
    const frameIndex = activeImgIndex ? (activeImgIndex + 1).toString().padStart(2, '0') : '';
    return `${import.meta.env.BASE_URL}species_assets/${sid}/sequence/${sid}_viewer_frame-${frameIndex}.webp`;
};

//lycorma-delicatula_viewer_frame-01

export const getSpeciesHiResImgSequenceUrl = (sid:string, activeImgIndex: number) => {
    return `${import.meta.env.BASE_URL}species_assets/${sid}/sequence_hi-res/${sid}_viewer_frame-${(activeImgIndex + 1).toString().padStart(2, '0')}.webp`;
};