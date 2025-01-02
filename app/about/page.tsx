import React from "react";
import Image from "next/image";
const AboutPage = () => {
  return (
    <main className="h-full flex flex-col items-center justify-center py-28 gap-10 px-10 ">
      <div className=" flex flex-col text-center justify-center space-y-8 w-[80%] items-center">
        <p className="text-text2 text-xl">ABOUT US</p>
        <h1 className="text-text2 text-4xl font-semibold md:text-5xl">
          {" "}
          Creative Blog Writting and publishing site{" "}
        </h1>
        <p className="text-text2 md:text-lg">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment.
        </p>
      </div>
      <div className="flex flex-col text-start w-[90%] items-center gap-5 sm:gap-7">
        <Image
          src={"/images/about.svg"}
          alt="about_image"
          width={1232}
          height={608}
        />
        <div className="text-text2  w-[100%] text-xl">HOW WE WORK</div>
        <div className="flex flex-col sm:flex-row w-[100%] justify-between gap-5 sm:gap-10 ">
          <h3 className="text-text2 text-xl sm:text-4xl md:w-[50%] font-semibold lg:text-5xl">
            I will show you how our team works
          </h3>
          <p className="text-slate-400">
            Bring to the table win-win market strategies to ensure perfect
            articles.{" "}
          </p>
        </div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="flex flex-col text-start bg-primary2 text-text p-9 gap-3  rounded-xl">
            <span className=" text-7xl font-bold">01</span>
            <h5 className=" text-xl font-bold">Brainstorming</h5>
            <p className="font-extralight text-sm text-slate-200">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated
            </p>
            <p className="font-semibold underline  ">Learn More</p>
          </div>
          <div className="flex flex-col text-start bg-slate-100 text-slate-700 p-9 gap-3  rounded-xl">
            <span className=" text-7xl font-bold">02</span>
            <h5 className=" text-xl text-primary2 font-bold">Analysing</h5>
            <p className="font-extralight text-sm ">
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with additional
              clickthroughs from DevOps. Nanotechnology immersion along the
              information highway will close the loop on focusing solely on the
              bottom line solely on the bottom line.
            </p>
            <p className="font-semibold underline  ">Learn More</p>
          </div>
          <div className="flex md:hidden lg:flex flex-col text-start bg-slate-50 text-slate-700 p-9 gap-3  rounded-xl">
            <span className=" text-7xl font-bold">03</span>
            <h5 className=" text-xl text-primary2 font-bold">
              News Publishing
            </h5>
            <p className="font-extralight text-sm ">
              03 News Publishing Leverage agile frameworks to provide a robust
              synopsis for high level overviews. Iterative approaches to
              corporate strategy foster collaborative thinking to further the
              overall value proposition. Organically grow the holistic world
              view of disruptive innovation via workplace diversity and
              empowerment.
            </p>
            <p className="font-semibold underline  ">Learn More</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
