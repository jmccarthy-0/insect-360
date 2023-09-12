export type TaxonDetails = {
    "binomialName": string,
    "commonName": string | null
    "classifiedBy": string | null;
}

export interface Taxon {
    "sid": string,
    "details": TaxonDetails
    "images": {
        "sequenceFramecount": number,
        "sequence": {
            "path": string,
            "filetype": string
        }
    }
}