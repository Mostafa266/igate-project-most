import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/images/logo.svg";

export default function Offer() {
  return (
    <section className="w-full bg-off-white py-20">
      <Container>
        <div className="w-full flex justify-center items-center flex-col md:flex-row rounded-[0.4rem] overflow-hidden">
          <div className="w-full md:w-[40%] h-100 bg-gray-300 flex items-center justify-center">
            <Image src={Logo} alt="" width={300} height={300} />
          </div>
          <div className="w-full md:w-[60%] h-100 p-5 md:p-10 xl:p-22 bg-olive-gray flex justify-center items-start flex-col">
            <span className="text-base text-white">LIMITED OFFER</span>
            <h3 className="text-3xl md:text-5xl text-white philo-font mt-3">
              Enjoy 35% off this Friday only, plus receive a special gift!
            </h3>
            <Button asChild variant={"secondary"} className="mt-10 px-15 py-6">
              <Link href={"#"}>Discover now</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
