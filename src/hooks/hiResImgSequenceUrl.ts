import { useState, useEffect } from "react";

const useHiResImgUrl = (sid: string, activeImgIndex: number) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(
      `${import.meta.env.BASE_URL}species_assets/${sid}/sequence_hi-res/${sid}_viewer_frame-${(activeImgIndex + 1).toString().padStart(2, "0")}.webp`,
    );
  }, [sid, activeImgIndex]);

  return url;
};

export default useHiResImgUrl;
