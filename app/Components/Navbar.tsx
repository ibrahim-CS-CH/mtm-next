"use client";
import Image from "next/image";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsopen] = useState(false);

  const handleMenu = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <section className=" flex justify-between items-center capitalize py-1 border-b">
        <Link href={"/"} className="">
          <Image
            src={"/images/logo.png"}
            alt="mtm-logo"
            placeholder="blur"
            blurDataURL={"/images/logo.png"}
            priority={true}
            width={130}
            height={130}
            className="sm:w-auto h-auto"
            title="MTM"
          />
        </Link>

        <div className="sm:flex hidden gap-4">
          <Link
            title="products"
            href={"/products"}
            className="p-2 hover:bg-red-500 hover:text-white hover:rounded-3xl duration-500 ">
            products
          </Link>
          <Link
            title="blogs"
            href={"/blogs"}
            className="p-2 hover:bg-red-500 hover:text-white hover:rounded-3xl duration-500 ">
            blogs
          </Link>
          <Link
            title="about us"
            href={"/aboutus"}
            className="p-2 hover:bg-red-500 hover:text-white hover:rounded-3xl duration-500 ">
            about us
          </Link>
        </div>
        <div className="hidden sm:flex ">
          <input
            type="text"
            placeholder="search"
            className="rounded-lg p-2 shadow-md dark:shadow-white/40  dark:bg-black/10"
            title="search"
          />
        </div>
        <div className="hidden sm:flex gap-4">
          <Link
            title="login"
            href={"/login"}
            className="p-2 hover:bg-red-500 hover:text-white hover:rounded-3xl duration-500 ">
            login
          </Link>
          <div
            title="cart"
            className="flex items-center  hover:bg-red-500 hover:text-white hover:rounded-3xl duration-500 px-2 ">
            <Link href={"/cart"}>cart</Link>
            <CiShoppingCart size={"2em"} />
          </div>
          <DarkModeToggle />
        </div>

        <button className="sm:hidden flex " onClick={handleMenu}>
          <CiMenuBurger size={"2em"} />
        </button>
      </section>
      <div
        className={`sm:hidden dark:shadow-slate-50 shadow-md p-2 ${
          isOpen
            ? " right-0 w-[50%] flex-col flex absolute gap-4 items-center bg-white/90 dark:bg-black/40 z-10"
            : "hidden"
        }`}>
        <Link
          title="products"
          href={"/products"}
          className="w-full text-center p-2 hover:rounded-2xl duration-300 hover:bg-red-400 hover:text-white">
          product
        </Link>
        <Link
          title="blogs"
          href={"/blogs"}
          className="w-full text-center  p-2 hover:rounded-2xl duration-300 hover:bg-red-400 hover:text-white">
          blogs
        </Link>
        <Link
          title="about us"
          href={"/aboutus"}
          className="w-full text-center  p-2 hover:rounded-2xl duration-300 hover:bg-red-400 hover:text-white">
          about us
        </Link>
        <Link
          title="login"
          href={"/login"}
          className="w-full text-center  p-2 hover:rounded-2xl duration-300 hover:bg-red-400 hover:text-white">
          login
        </Link>
        <Link
          title="cart"
          href={"/cart"}
          className="w-full flex justify-center items-center text-center  p-2 hover:rounded-2xl duration-300 hover:bg-red-400 hover:text-white">
          cart
          <CiShoppingCart size={"1.6em"} />
        </Link>
        <input
          type="text"
          placeholder="search"
          className="rounded-lg p-2 shadow-md dark:shadow-white/40  dark:bg-black/10"
          title="search"
        />{" "}
        <DarkModeToggle />
      </div>
    </>
  );
}
