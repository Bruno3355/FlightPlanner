"use client"
import { useState } from "react";
import Image from "next/image";

import Stripes from "./lib/stripes/stripes";

export default function Home() {
  const [buttonHover, setButtonHover] = useState<boolean | null>();
  const [active, setActive] = useState<boolean | null>(false);

  return (
    <div className="w-full h-screen grid grid-cols-1 grid-rows-1 items-center justify-items-center">
      <div className="relative col-start-1 col-end-1 row-start-1 row-end-1 grid justify-between overflow-hidden h-screen w-full bg-secondary -z-1">
        <Stripes />
      </div>
      <main className={`bg-primary col-start-1 col-end-1 row-start-1 row-end-1 p-10 w-2/4 h-2/4 relative z-1 rounded-2xl grid grid-flow-col grid-rows-3 items-center justify-items-center border-4 ${buttonHover ? 'border-accent' : 'border-transparent'} ${active ? "w-full h-screen" : "min-w-[600px] max-w-[800px] min-h-[400px] max-h-[600px]"} transition-all duration-500`} >
        <Image src="airplane.svg" className={`${active ? 'animate-flyairplane' : ''} transition-all duration-500 `} width={101} height={101} alt="Airplane"/>
        <section className="flex justify-center items-center flex-col">
          <h1 className="text-5xl font-h1 text-white antialiased"><span className="text-accent bg-transparent">Flight</span> Planner</h1>
          <h2 className="text-white text-2xl">Making your flight easier</h2>
        </section>
        <button className="w-36 h-14 rounded-2xl bg-accent text-xl font-medium hover:bg-white active:bg-green-400" onMouseOver={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)} onClick={() => {
          setActive((prev) => !prev);
          console.log(active);
        }
          }>Begin</button>
      </main>
    </div>

  );
}
