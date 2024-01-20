export const getSpeciesImgSequenceUrl = (
  sid: string,
  activeImgIndex: number,
) => {
  const frameIndex = !isNaN(activeImgIndex)
    ? (activeImgIndex + 1).toString().padStart(2, "0")
    : "";

  return `${import.meta.env.BASE_URL}species_assets/${sid}/sequence/${sid}_viewer_frame-${frameIndex}.webp`;
};

//lycorma-delicatula_viewer_frame-01
