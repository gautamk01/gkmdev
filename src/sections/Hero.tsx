import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60">
      <div className="container">
        <div className="flex flex-col items-center ">
          <Image src={memojiImage} className=" size-[100px]" alt="Person peeking from behind the laptop" />
          <div className=" bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">

            <div className=" bg-green-500 size-2.5 rounded-full"></div>
            <div className=" text-sm font-medium ">Available for new Projects</div>
          </div>
        </div>
        <div className=" max-w-lg mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-center mt-8 ">Building Exceptiona User Experiences</h1>
          <p className="mt-4 text-center text-white/60 ">
            I specialize in tranforming designs into functional, high performing web application. Let's discuss your nex project.
          </p>
        </div>

        <div className=" flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className=" inline-flex items-center gap-2 border border-white/55 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className=" inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className=" font-semibold">Let's Connect </span>
          </button>
        </div>
      </div>
    </div>
  );
};
