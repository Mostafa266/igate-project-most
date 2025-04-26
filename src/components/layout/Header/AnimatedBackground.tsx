export default function AnimatedBg() {
  return (
    <>
      <div
        className={`hidden md:block absolute left-0 bottom-0 w-[48%] bg-gainsboro z-10 overflow-hidden transition-all duration-1000`}
        style={{ height: "85%" }}
      ></div>
      <div
        className={`hidden md:block absolute right-0 bottom-[-10rem] w-[45%] bg-gainsboro z-10 overflow-hidden transition-all duration-1000 delay-100`}
        style={{ height: "85%" }}
      ></div>
    </>
  );
}
