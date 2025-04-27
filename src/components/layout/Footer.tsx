import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";

import iconOne from "@/images/logos/globalchart.png";
import iconTwo from "@/images/logos/fancywear.png";
import iconThree from "@/images/logos/bestBank.png";
import iconFour from "@/images/logos/datebites.png";
import iconFive from "@/images/logos/exdone.png";
import iconSix from "@/images/logos/slabSpace.png";
import iconSeven from "@/images/logos/overlays.png";
import logo from "@/images/logos/dark-logo.png";
export const Footer: React.FC = () => {
  const paymentLogos = [
    { src: iconOne, alt: "Globalchart" },
    { src: iconTwo, alt: "Fancywear" },
    { src: iconThree, alt: "BestBank" },
    { src: iconFour, alt: "DataBites" },
    { src: iconFive, alt: "ExDone" },
    { src: iconSix, alt: "SlabSpace" },
    { src: iconSeven, alt: "Overlays" },
  ];

  return (
    <footer className="bg-white text-gray-700">
      {/* Brand & Categories and Payment Method */}
      <div className="container mx-auto px-4 py-8">
        <div className="w-full flex flex-col justify-center items-start">
          {/* Categories section */}
          <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-8 flex-1">
            <div>
              <h3 className="text-lg font-semibold mb-3">Fashion Man</h3>
              <ul className="space-y-2">
                {[
                  "Zeneta Fashion",
                  "Xgard 304",
                  "Never Star",
                  "Rillingen Hood",
                  "DropBrain",
                  "Red Pride",
                  "Onedry 1998",
                  "Starclothing",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Woman Fashion</h3>
              <ul className="space-y-2">
                {[
                  "Fushion",
                  "Aneta Glowing",
                  "Amanda 19",
                  "Kiosku",
                  "Womandry",
                  "Ababil",
                  "Lowly Cloth",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Accessories</h3>
              <ul className="space-y-2">
                {[
                  "Antena",
                  "Glimming",
                  "Storeku",
                  "Cempaka Store",
                  "Memee.id",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Gaming</h3>
              <ul className="space-y-2">
                {[
                  "Stargame.id",
                  "Dunia Games",
                  "Vale Store",
                  "Decade",
                  "Deff Store",
                  "Press Start.id",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Property</h3>
              <ul className="space-y-2">
                {[
                  "Green Property",
                  "A-Naiku House",
                  "Dentis World",
                  "A Property",
                  "Bolam.id",
                  "Houseme.Store",
                  "PAUSMEN",
                ].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:underline">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Payment logos */}
          <div className="w-full mx-0 mt-8">
            <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-6">
              {paymentLogos.map((logo, index) => (
                <div key={index} className="flex justify-center items-center">
                  <Image src={logo.src} alt={`${logo.alt} logo`} width={100} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Footer bottom part */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Image src={logo} alt="Novara Logo" width={100} />
          <nav className="flex flex-wrap gap-2 md:gap-6 text-sm">
            {["Products", "Sells", "Buy", "Contact", "Login"].map(
              (item, idx) => (
                <Button
                  asChild
                  variant="ghost"
                  className={
                    idx === 4
                      ? "bg-black text-white rounded-sm"
                      : "hover:bg-black hover:text-white"
                  }
                  key={item}
                >
                  <Link href="#" className="px-2">
                    {item}
                  </Link>
                </Button>
              )
            )}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
