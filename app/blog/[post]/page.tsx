import blogPostData from "@/app/data/data2";
import Post from "@/components/ui/post";
import { notFound } from "next/navigation";
import { useState } from "react";
export default async function Page({
  params,
}: {
  params: Promise<{ post: string }>;
}) {
  const slug = (await params).post;
  const post = blogPostData.find((post) => post.id === parseInt(slug));

  if (!post) {
    return notFound();
  }
  return (
    <div>
      <Post
        key={post.id}
        image={post.image}
        catogeries={post.categories}
        title={post.title}
        description={post.description}
        description2={post.description2}
      />
      {/* Comment section */}
    </div>
  );
}
