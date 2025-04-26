import React, { useEffect, useState } from "react";

export default function AnimatedBg() {
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    setIsAnimated(true);
  }, []);
  return (
    <>
      <div
        className={`absolute left-0 bottom-0 w-[48%] bg-gainsboro z-10 transition-all duration-1000 ${
          isAnimated ? "h-[85%]" : "h-0"
        }`}
      ></div>
      <div
        className={`absolute right-0 bottom-[-10rem] w-[45%] bg-gainsboro z-10 transition-all duration-1000 delay-100 ${
          isAnimated ? "h-[85%]" : "h-0"
        }`}
      ></div>
    </>
  );
}
