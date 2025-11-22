//@ts-check

/** @import {Animal} from './types' */

/** @type {Partial<Animal>[]} */
export const data = [
    {
        key: "cat",
        scientificClassification: {
            Kingdom: "Animalia", 
            Phylum: "Chordata",
            Class: "Mammalia",
            Order: "Carnivora",
            Family: "Felidae",
            Genus:  "Felis",
            Species: "F. catus"
        },
        binomialName: "Felis catus",
        population: 600000000,
        emoji: "🐱",
        displayName: "Cat"
    }, {
        key: "dog",
        scientificClassification: {
            Kingdom:	"Animalia",
            Phylum:	"Chordata",
            Class:	"Mammalia",
            Order:	"Carnivora",
            Family:	"Canidae",
            Genus:	"Canis",    
            Species:	"C. familiaris"
        },
        binomialName: "Canis familiaris",
        emoji: "🐶",
        displayName: "Dog"
    },
    {
        key: "hamster",
        scientificClassification: {
            Kingdom:	    "Animalia",
            Phylum:	    "Chordata",
            Class:	    "Mammalia",
            Order:	    "Rodentia",
            Family:	    "Cricetidae",
            Subfamily:	"Cricetinae"
        },
        emoji: "🐹",
        displayName: "Hamster"
    }
]

export function render(){
    return JSON.stringify(data);
}