import React from "react";
import FeaturesList from "./FeaturesList";
import Container from "@/components/ui/container";

export default function Features() {
  return (
    <section>
      <Container>
        <div className="w-full flex-col justify-center items-center">
          <h2 className="text-5xl philo-font text-olive-gray text-center">
            Best customer experience.
          </h2>
          <p className="text-center text-olive-gray text-base font-light">
            If you need further adjustments or additional sentences, let me
            know!
          </p>
        </div>
        <FeaturesList />
      </Container>
    </section>
  );
}
