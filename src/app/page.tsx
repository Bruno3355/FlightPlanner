"use client";
import { useState } from "react";
import Image from "next/image";

import Card from "./lib/components/organisms/Card/Card";
import SidebarMenu from "./lib/components/organisms/SidebarMenu/SidebarMenu";
import Stripes from "./lib/components/molecules/Stripes/Stripes";
import FourGridContainer from "./lib/components/templates/FourGridContainer/FourGridContainer";

export default function Home() {
  const [buttonHover, setButtonHover] = useState<boolean | null>();
  const [active, setActive] = useState<boolean | null>(false);

  return (
    <div className="w-screen h-screen relative bg-primary overflow-hidden">
      <Stripes active={active} />

      <main
        className={`bg-primary p-10 w-2/4 h-2/4 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-1 rounded-2xl grid grid-flow-col grid-rows-3 items-center justify-items-center border-4 ${
          buttonHover ? "border-accent" : "border-transparent"
        } ${
          active
            ? "w-full h-screen animate-changePage"
            : "min-w-[600px] max-w-[800px] min-h-[400px] max-h-[600px]"
        } transition-all duration-500`}
      >
        <Image
          src="airplane.svg"
          className={`${
            active ? "animate-flyairplane" : ""
          } transition-all duration-500 `}
          width={101}
          height={101}
          alt="Airplane"
        />
        <section className="flex justify-center items-center flex-col">
          <h1 className="text-5xl font-h1 text-white antialiased">
            <span className="text-accent bg-transparent">Flight</span> Planner
          </h1>
          <h2 className="text-white text-2xl">Making your flight easier</h2>
        </section>
        <button
          className="w-36 h-14 rounded-2xl bg-accent text-xl font-medium hover:bg-white active:bg-green-400"
          onMouseOver={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          onClick={() => {
            setActive((prev) => !prev);
            console.log(active);
          }}
        >
          Begin
        </button>
      </main>

      <SidebarMenu active={active} />

      <FourGridContainer active={active}>
        <Card classAtributes={`col-start-1 col-end-2 row-start-1 row-end-1 grid grid-cols-1 grid-rows-[20%,80%]`}>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold underline">Flight Release</h2>
            <h3 className="font-medium">Autonomy calculation</h3>
          </div>
          <table>
            <thead className="bg-grey">
              <tr>
                <th scope="col" ></th>
                <th scope="col">Time (hh:mm)</th>
                <th scope="col">Fuel (US Gallons)</th>
              </tr>
            </thead>
            <tbody className="[&>tr>th]:text-left [&>tr>th]:pl-2 [&>tr>td]:text-center">
              <tr>
                <th scope="row">Step</th>
                <td><input type="time" className="w-full h-full text-center" /></td>
                <td>Lorem Ipsum</td>
              </tr>
              <tr>
                <th scope="row">Alternate</th>
                <td><input type="time" className="w-full h-full text-center" /></td>
                <td>Lorem Ipsum</td>
              </tr>
              <tr>
                <th scope="row">Reserve</th>
                <td><input type="time" className="w-full h-full text-center" /></td>
                <td>Lorem Ipsum</td>
              </tr>
              <tr>
                <th scope="row">Minimum Required</th>
                <td><input type="time" className="w-full h-full text-center" /></td>
                <td>Lorem Ipsum</td>
              </tr>
              <tr>
                <th scope="row">Additional</th>
                <td><input type="time" className="w-full h-full text-center" /></td>
                <td>Lorem Ipsum</td>
              </tr>
            </tbody>
            <tfoot className="bg-grey">
              <tr>
                <th scope="row" >Total on Board</th>
                <td>Lorem Ipsum</td>
                <td>Lorem Ipsum</td>
              </tr>
            </tfoot>
          </table>
        </Card>

        <Card classAtributes={`col-start-2 col-end-3 row-start-1 row-end-1 grid grid-cols-1 grid-rows-[20%,80%]`}></Card>
        <Card classAtributes={`col-start-1 col-end-2 row-start-2 row-end-3 grid grid-cols-1 grid-rows-[20%,80%]`}></Card>
        <Card classAtributes={`col-start-2 col-end-3 row-start-2 row-end-3 grid grid-cols-1 grid-rows-[20%,80%]`}></Card>
      </FourGridContainer>
    </div>
  );
}
