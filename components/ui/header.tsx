"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNav = (): void => {
    setisClick(!isClick);
  };
  return (
    <header>
      <div className="h-24 w-screen bg-white flex justify-between px-5 sm:px-10 items-center shadow-md">
        <Link href={"/"}>
          <Image alt="logo" width={157} height={43} src={"/images/logo.svg"} />
        </Link>
        <div className=" hidden md:flex items-center  gap-10">
          <ul className="text-xl font-raleway font-medium text-text2 flex gap-10">
            <li className="hover:text-primary2">
              <Link href={"/blog"}>Blog</Link>{" "}
            </li>
            <li className="hover:text-primary2">
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
          <Image
            src={"/images/searchicon.svg"}
            alt="search"
            width={23}
            height={23}
          />
          <Button className=" bg-primary2 hover:bg-indigo-400 font-raleway text-text px-11 py-5 rounded-lg">
            Contact Us
          </Button>
        </div>
        <button
          className=" md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500"
          onClick={toggleNav}
        >
          {isClick ? (
            <Image
              src={"/images/x-solid.svg"}
              alt="menu"
              width={20}
              height={20}
            />
          ) : (
            <Image
              src={"/images/bars-solid.svg"}
              alt="menu"
              width={20}
              height={20}
            />
          )}
        </button>
      </div>
      {isClick && (
        <div>
          <div className=" bg-[#F7F7F7]pb-5  sm:px-3">
            <ul className=" flex flex-col items-center p-3 bg-[#F7F7F7]  gap-5 border-b border-b-gray-900">
              <li className="hover:text-primary2  hover:underline">
                <Link href="/">Home</Link>
              </li>
              <li className=" hover:text-primary2 hover;underline">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="hover:text-primary2  hover:underline">
                <Link href="/about">About </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
