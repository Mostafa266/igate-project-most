export type NavLink = {
    label: string;
    href: string;
};

export const NAV_LINKS:readonly  NavLink[] = [
    {label: "Products", href:"/products"},
    {label: "Sells", href:"/sells"},
    {label: "Buy", href:"/buy"},
    {label: "Contact", href:"/contact"}
]