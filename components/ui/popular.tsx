"use client";
import React from "react";
import { Button } from "./button";
import blogData from "@/app/data/data";
import Card from "./card";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Popular = () => {
  const Router = useRouter();
  return (
    <main className=" flex h-full py-28 justify-center items-center">
      <div className="w-[90%] flex flex-col justify-center lg:px-10  gap-10 items-center">
        <div className=" flex justify-between w-full  items-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text2">
            Popular Posts
          </h2>
          <Link href={"/blog"}>
            <Button className="bg-primary2 hidden sm:block">View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((card, index) => {
            return (
              <div
                key={index}
                onClick={() => Router.push(`/blog/${index + 1}`)}
              >
                <Card
                  image={card.image}
                  catogeries={card.catogeries}
                  title={card.title}
                  description={card.description}
                />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Popular;
