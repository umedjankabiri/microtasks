import {SneakersItems} from "common/types/Routing/SneakerProps.ts";
import adidasModel from "assets/adidas.webp"
import pumaModel from "assets/puma.webp"
import pb from "assets/pb.jpg"

export const sneakerModels: SneakersItems[] = [
    {
        model: 'ADIDAS',
        collection: 'new collection',
        price: '3500$',
        picture: adidasModel,
    },
    {
        model: 'PUMA',
        collection: 'new collection',
        price: '3300$',
        picture: pumaModel
    },
    {
        model: 'PULL&BEAR',
        collection: 'new collection',
        price: '180$',
        picture: pb
    }
]