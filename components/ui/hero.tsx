import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <main className="bg-[url('/images/Herobackground.svg')] flex justify-center items-center py-28  w-screen h-full bg-center bg-cover bg-no-repeat   ">
      <div className="w-[90%]  flex flex-col lg:flex-row justify-center lg:px-10 gap-10 items-center">
        <div className="lg:w-1/2 w-[90%] text-text flex gap-10 flex-col">
          <p className=" font-bold text-lg">Featured Post</p>
          <h1 className=" text-4xl lg:text-5xl xl:text-7xl leading-tight font-bold">
            How AI will Change the Future
          </h1>
          <p className=" text-base lg:text-lg">
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly
            cute. For example, home robots will overcome navigation, direction
          </p>
          <Link href={"/about"}>
            <Button className="bg-text text-text2 hover:bg-indigo-400 w-40 py-7 hover:text-white">
              Read more
            </Button>
          </Link>
        </div>
        <div className="lg:w-1/2 w-[90%] flex items-center justify-center">
          <Image
            src={"/images/hero.svg"}
            alt="hero_image"
            width={608}
            height={576}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
