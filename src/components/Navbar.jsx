"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "./theme-btn";
import { useSelector } from "react-redux";

const Navbar = () => {
  const token = useSelector((state) => state.authR.token);

  return (
    <nav className="sticky top-0 z-10 py-4 border-b bg-background/50 backdrop-blur">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <Link href={"/"}>
          <div className="text-lg font-bold uppercase">Room Booking</div>
        </Link>
        <div className="items-center hidden gap-4 md:flex">
          <Link
            href="/"
            className="hover:text-[#CE1C43] transition-transform duration-300"
          >
            {" "}
            Home
          </Link>
          <Link
            href="/rooms"
            className="hover:text-[#CE1C43] transition-transform duration-300"
          >
            Rooms
          </Link>

          <div className="flex items-center">
            {!token && (
              <Button className="mx-1" variant="">
                <Link href="/login">Login</Link>
              </Button>
            )}
            {!token && (
              <Button className="mx-1" variant="outline">
                <Link href="/signup">Signup</Link>
              </Button>
            )}

            <ModeToggle />
          </div>
        </div>

        <div className="md:hidden">
          <span className="mx-2">
            <ModeToggle />
          </span>
          <Sheet>
            <SheetTrigger>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="my-4 font-bold uppercase">
                  Room Booking
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-4">
                    <Link href="/"> Home</Link>
                    <Link href="/room">Rooms</Link>
                    {!token && (
                      <Button href="/login" className="mx-1 text-xs" variant="">
                        <Link href="/login">Login</Link>
                      </Button>
                    )}

                    {!token && (
                      <Button
                        href="/signup"
                        className="mx-1 text-xs"
                        variant="outline"
                      >
                        <Link href="/signup">Signup</Link>
                      </Button>
                    )}
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
