import { StaticImageData } from "next/image";

export type INavLink = {
    label: string;
    href: string;
};


export type ISponsorsImage = {
    id:string,
    src:StaticImageData;
    alt:string;
    link?:string;
}