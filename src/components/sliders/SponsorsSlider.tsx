import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "../ui/container";
import { SPONSORS_SLIDES } from "@/lib/constants";
import Image from "next/image";

const SponsorsSlider = () => {
  return (
    <>
      <Container>
        <Carousel className="w-full my-20">
          <CarouselContent className="-ml-1">
            {SPONSORS_SLIDES.map((slide) => (
              <CarouselItem
                key={slide.id}
                className="pl-1 basis-1/2 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/7"
              >
                <div className="p-1">
                  <Card className="rounded-[0.25rem] shadow-none">
                    <CardContent className="flex items-center  justify-center">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        width={120}
                        height={120}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </>
  );
};

export default SponsorsSlider;
