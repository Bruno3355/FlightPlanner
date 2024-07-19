"use client"
import { useState } from "react";
import Image from "next/image";

import Stripes from "./lib/stripes/stripes";
import Card from "./lib/components/card/Card";

export default function Home() {
  const [buttonHover, setButtonHover] = useState<boolean | null>();
  const [active, setActive] = useState<boolean | null>(false);

  return (
    <div className="w-full h-screen grid grid-cols-[100px,auto] grid-rows-1 items-center justify-items-center bg-secondary">
      <div className={`relative col-start-1 col-end-3 row-start-1 row-end-1 grid justify-between overflow-hidden h-screen w-full -z-1 ${active ? "animate-changePage" : ""}`}>
        <Stripes />
      </div>
      <main className={`bg-primary col-start-1 col-end-3 row-start-1 row-end-1 p-10 w-2/4 h-2/4 relative z-1 rounded-2xl grid grid-flow-col grid-rows-3 items-center justify-items-center border-4 ${buttonHover ? 'border-accent' : 'border-transparent'} ${active ? "w-full h-screen animate-changePage" : "min-w-[600px] max-w-[800px] min-h-[400px] max-h-[600px]"} transition-all duration-500`} >
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
      <Card classAtributes={`col-start-1 col-end-3 row-start-1 row-end-1`}/>
      <aside className={`col-start-1 col-end-1 row-start-1 row-end-1 bg-white w-full h-full transition-all duration-1000 ${active ? 'opacity-100' : 'opacity-0'}`}></aside>

    </div>

  );
}
