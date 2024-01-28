export type TaxonDetails = {
  binomialName: string;
  commonName: string | null;
  classifiedBy: string | null;
};

export type TaxonPhotoMeta = {
  description?: string,
  cameraModel?: string,
  lens?: string,
  flash?: string,
  stacker?: string
};

export interface Taxon {
  sid: string;
  photoMeta: TaxonPhotoMeta;
  details: TaxonDetails;
  images: {
    sequenceFramecount: number;
  };
}
