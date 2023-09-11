export interface Taxon {
    "sid": string,
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