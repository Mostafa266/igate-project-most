import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

type PriceFilterProps = {
  range: number[];
  setRange: React.Dispatch<React.SetStateAction<number[]>>;
};

export function PriceFilter({ range, setRange }: PriceFilterProps) {
  return (
    <div className={cn("w-[40%] flex flex-col items-center")}>
      <Slider
        value={range}
        onValueChange={(currentRange) => {
          setRange(currentRange);
        }}
        min={0}
        max={1000}
        step={1}
      />
      <div className="flex justify-between w-full text-sm mt-2">
        <span>Min: ${range[0]}</span>
        <span>Max: ${range[1]}</span>
      </div>
    </div>
  );
}
