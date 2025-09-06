"use client"
import Image from "next/image";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { NavbarDemo } from "@/app/features/navbar";
import Introduction from "./features/introduction";

export default function Home() {
  return (
    <main className="min-h-screen">
      <BackgroundRippleEffect />
      <NavbarDemo />
      <div className="flex items-center justify-center min-h-screen px-8">
        <div className="flex items-center justify-between w-full max-w-6xl">
          <div className="flex-1">
            <video
              src="/cube.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg shadow-lg w-full max-w-xl"
            />
          </div>
          <Introduction/>
        </div>
      </div>
    </main>
  );
}