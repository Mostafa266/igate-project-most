import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function NewsLetter() {
  return (
    <section className="w-full bg-off-white py-20">
      <Container>
        <div className="flex flex-col justify-center items-center gap-8">
          <h3 className="text-3xl md:text-5xl text-black philo-font mt-3">
            Enjoy 35% off this Friday only, plus receive a special gift!
          </h3>
          <p className="text-xs md:text-base text-gray-700">
            If you need further adjustments or additional sentences, let me
            know!
          </p>
        </div>
        <div className="flex items-center w-full md:w-[30%] mx-auto my-5">
          <div className="relative flex-1 bg-white rounded-none rounded-l-sm">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            <Input
              type="email"
              placeholder="Enter your email"
              className="pl-10 h-10 pr-4 py-2 w-full border-none border-gray-300 border-r-0 rounded-none rounded-l-2xl"
            />
          </div>
          <Button className="h-10 px-6 rounded-none rounded-r-sm">
            Subscribe
          </Button>
        </div>
      </Container>
    </section>
  );
}
