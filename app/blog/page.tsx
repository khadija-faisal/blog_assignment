"use client";
import React from "react";
import blogData from "@/app/data/data";
import Card from "@/components/ui/card";
import { useRouter } from "next/navigation";
const BlogPage = () => {
  const Router = useRouter();
  return (
    <main className="flex flex-col items-center justify-center h-full px-5 sm:px-10 xl:px-28 py-28">
      <div className="  flex-col text-center justify-center space-y-8 w-[90%] items-center">
        <p className="text-text2 text-xl">OUR BLOGS</p>
        <h1 className="text-text2 text-4xl font-semibold md:text-5xl">
          Find our all blogs from here
        </h1>
        <p className="text-text2 md:text-lg">
          our blogs are written from very research research and well known
          writers writers so that we can provide you the best blogs and articles
          articles for you to read them all along
        </p>
      </div>
      <div className="grid grid-cols-1 py-10  sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogData.map((card, index) => {
          return (
            <div key={index} onClick={() => Router.push(`/blog/${index + 1}`)}>
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
    </main>
  );
};

export default BlogPage;
