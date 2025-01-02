"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";
interface BlogPostData {
  id?: number;
  catogeries: {
    profession: string;
    date: string;
  };
  title: string;
  image: string;
  description: string;
  description2: string;
}
const Post = (props: BlogPostData) => {
  // State for comment section
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  // Add a comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };
  return (
    <main className="flex flex-col gap-10 items-center justify-center h-full px-10 lg:px-28 py-28">
      <div className="flex md:w-[80%] items-center gap-5">
        <span className="text-text2  font-bold">
          {props.catogeries.profession}
        </span>
        <span className="text-slate-600 font-medium">
          {props.catogeries.date}
        </span>
      </div>
      <h1 className="text-text2 md:w-[80%] text-4xl font-raleway lg:text-6xl font-bold ">
        {props.title}
      </h1>
      <Link href={"/blog"}>
        <Image src={props.image} alt="card_image" width={1232} height={608} />
      </Link>
      <div className=" md:w-[80%] flex flex-col gap-5 justify-center items-center">
        <p className="text-text2 text-lg ">{props.description}</p>
        <p className="text-text2 text-lg ">{props.description2}</p>
        <p className="text-text2 text-lg  ">{props.description}</p>
        <p className="text-text2 text-lg ">{props.description2}</p>
      </div>
      <div className="md:w-[80%] p-6 border-t border-blue-200 bg-purple-50">
        <h2 className="text-2xl font-semibold text-primary2 mb-4">
          Add Comments
        </h2>
        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li
                key={index}
                className=" text-text2 text-lg font-medium font-raleway p-3 rounded-lg shadow-sm"
              >
                {comment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-600">Add your thoughts.....!. </p>
        )}
        <div className="mt-6">
          <textarea
            className="w-full p-4 border text-lg border-purple-300 rounded-lg font-raleway font-bold text-black
               "
            rows={5}
            placeholder="Write your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <Button
            className="mt-4 px-6 py-3 bg-primary2 text-white rounded-lg hover:bg-indigo-400 "
            onClick={handleAddComment}
          >
            Add Comment
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Post;
