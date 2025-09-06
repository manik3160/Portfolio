import Image from "next/image";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { NavbarDemo } from "@/app/features/navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <BackgroundRippleEffect />
      <div className="flex flex-col items-center justify-center h-screen">
        <NavbarDemo />
      </div>
      <div>
        <h1 className="text-white text-4xl font-bold">Manik's Portfolio</h1>
      </div>
      <div className="mt-8">
        <video
          src="/cube.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg shadow-lg w-full max-w-3xl"
        />
      </div>
    </main>
  );
}