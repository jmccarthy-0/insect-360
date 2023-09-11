export interface Taxon {
    "sid": string,
    "scientificName": string,
    "commonName": string,
    "images": {
      "sequenceFramecount": number,
      "paths": {
          "sequence": {
              "path": string,
              "filetype": string
          }
      }
    }
}