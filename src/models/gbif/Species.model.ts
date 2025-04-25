export interface SpeciesNameResponse {
    // For /species/{usageKey}/name
    
    key: number
    scientificName: string
    type: "SCIENTIFIC"
    genusOrAbove: string
    infraGeneric: string
    specificEpithet: string
    infraSpecificEpithet: string
    cultivarEpithet: string
    strain: string
    notho: "GENERIC"
    authorship: string
    year: string
    bracketAuthorship: string
    bracketYear: string
    sensu: string
    parsed: true
    parsedPartially: true
    nomStatus: string
    remarks: string
    canonicalName: string
    canonicalNameWithMarker: string
    canonicalNameComplete: string
    rankMarker: "DOMAIN"
}