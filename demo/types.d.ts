export interface Animal {
    key: string
    binomialName: string
    population: number
    emoji: string
    displayName: string
    scientificClassification: {
        Kingdom: string
        Phylum:	string
        Class: string
        Order:	string
        Family:	string
        Genus:	string   
        Species: string
    }
}