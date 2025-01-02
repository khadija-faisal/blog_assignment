import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogData {
  id?: number;
  image: string;
  catogeries: {
    profession: string;
    date: string;
  };
  title: string;
  description: string;
}

const Card = (Props: BlogData) => {
  return (
    <div className=" flex flex-col w-[310px] 2xl:w-[400px] px-2 gap-5">
      <Link href={""}>
        <Image src={Props.image} alt="card_image" width={400} height={360} />
      </Link>
      <div className="flex items-center gap-5">
        <span className="text-text2  font-bold">
          {Props.catogeries.profession}
        </span>
        <span className="text-slate-600 font-medium">
          {Props.catogeries.date}
        </span>
      </div>
      <div className="">
        <h3 className="text-text2 text-2xl font-bold line-clamp-2 ">
          {Props.title}
        </h3>
        <p className="text-slate-600 line-clamp-3">{Props.description}</p>
      </div>
      <Link href={""} className="text-primary2 underline font-bold text-lg">
        Read More...
      </Link>
    </div>
  );
};

export default Card;
