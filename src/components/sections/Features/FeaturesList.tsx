import React from "react";
import FeaturesCard from "@/components/cards/FeaturesCard";
import { FEATURES_CARDS } from "@/lib/constants";

const FeaturesList = () => {
  return (
    <div className="w-full grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-15">
      {FEATURES_CARDS.map((item, index) => (
        <FeaturesCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default FeaturesList;
