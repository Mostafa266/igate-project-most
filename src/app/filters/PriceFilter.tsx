import { useState } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

export function PriceFilter({ className, ...props }: SliderProps) {
  const [range, setRange] = useState<number[]>([5, 1000]);
  console.log(range);

  return (
    <div className={cn("w-[40%] flex flex-col items-center ", className)}>
      <Slider
        value={range}
        onValueChange={(newRange) => setRange(newRange)}
        min={0}
        max={100}
        step={1}
        {...props}
      />
      <div className="flex justify-between w-full text-sm mt-2">
        <span>Min: ${range[0]}</span>
        <span>Max: ${range[1]}</span>
      </div>
    </div>
  );
}
