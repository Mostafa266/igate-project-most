import { IFeatures } from "@/lib/types";
import Image from "next/image";

const FeaturesCard = ({ icon, title, description }: IFeatures) => {
  return (
    <div className="flex gap-4 items-center my-5">
      <div className="w-[4rem] h-[4rem] rounded-[0.4rem] bg-pale-ivory flex items-center justify-center">
        <Image src={icon} alt="Image alt" />
      </div>
      <div className="flex flex-col">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
