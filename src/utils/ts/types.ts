export type TaxonDetails = {
  binomialName: string;
  commonName: string | null;
  classifiedBy: string | null;
};

export type TaxonMeta = {
  photoInfo: string;
};

export interface Taxon {
  sid: string;
  meta: TaxonMeta;
  details: TaxonDetails;
  images: {
    sequenceFramecount: number;
  };
}
