"use client"
import { useState } from "react";

import Stripes from "./lib/stripes/stripes";

export default function Home() {
  const [buttonHover, setButtonHover] = useState<boolean | null>()

  return (
    <div className="w-full h-screen flex">
      <div className="relative grid justify-between overflow-hidden h-screen w-full bg-secondary -z-1">
        <Stripes />
      </div>
      <main className={`bg-primary p-10 w-2/4 h-2/4 absolute z-1 top-1/4 left-1/4 min-w-[600px] max-w-[800px] min-h-[400px] max-h-[600px] rounded-2xl grid grid-flow-col grid-rows-3 items-center justify-items-center border-4 ${buttonHover ? 'border-accent' : 'border-transparent'}`} >
        <img src="airplane.svg" className=""/>
        <section className="flex justify-center items-center flex-col">
          <h1 className="text-5xl font-h1 text-white antialiased"><span className="text-accent bg-transparent">Flight</span> Planner</h1>
          <h2 className="text-white text-2xl">Making your flight easier</h2>
        </section>
        <button className="w-36 h-14 rounded-2xl bg-accent text-xl font-medium hover:bg-white active:bg-green-400" onMouseOver={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)}>Begin</button>
      </main>
    </div>
  );
}
