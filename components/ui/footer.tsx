import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center">
      <div className="py-28 w-[90%] flex flex-col justify-center items-center gap-7 bg-text">
        <Link href={"/"}>
          <Image alt="logo" width={157} height={43} src={"/images/logo.svg"} />
        </Link>
        <ul className="text-xl font-raleway font-medium text-text2 flex gap-10">
          <li className="hover:text-primary2">
            <Link href={"/"}>Home</Link>{" "}
          </li>
          <li className="hover:text-primary2">
            <Link href={"/blog"}>Blog</Link>{" "}
          </li>
          <li className="hover:text-primary2">
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
        <div className="flex gap-5">
          <Link href={""}>
            <Image
              src={"/images/linkedin.svg"}
              alt="linkedin"
              width={24}
              height={24}
            />
          </Link>
          <Link href={"https://github.com/khadija-faisal"}>
            <Image
              src={"/images/github.svg"}
              alt="linkedin"
              width={24}
              height={24}
            />
          </Link>
          <Link href={"https://www.instagram.com/doll.alyana/"}>
            <Image
              src={"/images/insta.svg"}
              alt="linkedin"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <div className="h-[1px] w-[90%] bg-primary2"></div>
        <p className="text-text2">
          made by Khadija Faisal © 2024. All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
