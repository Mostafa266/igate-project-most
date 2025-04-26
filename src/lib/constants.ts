import { SPONSORS_IMAGES } from "@/images/sponsors/images";
import { INavLink, ISponsorsImage } from "./types";



export const NAV_LINKS:ReadonlyArray<INavLink> = [
    {label: "Products", href:"/products"},
    {label: "Sells", href:"/sells"},
    {label: "Buy", href:"/buy"},
    {label: "Contact", href:"/contact"}
]


export const SPONSORS_SLIDES: ISponsorsImage[] = [

    {
        id:"1",
        src:SPONSORS_IMAGES.globalIcon,
        alt:"Global sponsor logo",
    },
    {
        id:"2",
        src:SPONSORS_IMAGES.fancyIcon,
        alt:"Fancy sponsor logo",
    },
    {
        id:"3",
        src:SPONSORS_IMAGES.bestBankIcon,
        alt:"Best sponsor logo",
    },
    {
        id:"4",
        src:SPONSORS_IMAGES.dataBitesIcon,
        alt:"Global sponsor logo",
    },
    {
        id:"5",
        src:SPONSORS_IMAGES.exDoneIcon,
        alt:"exDone sponsor logo",
    },
    {
        id:"6",
        src:SPONSORS_IMAGES.slabIcon,
        alt:"Slab sponsor logo",
    },
    {
        id:"7",
        src:SPONSORS_IMAGES.fictionalIcon,
        alt:"fictional sponsor logo",
    }
]