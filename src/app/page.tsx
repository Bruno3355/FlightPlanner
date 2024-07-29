"use client";
import { useState, createContext } from "react";
import Image from "next/image";

import Card from "./lib/components/molecules/Card/Card";
import SidebarMenu from "./lib/components/organisms/SidebarMenu/SidebarMenu";
import Stripes from "./lib/components/molecules/Stripes/Stripes";
import FourGridContainer from "./lib/components/templates/FourGridContainer/FourGridContainer";
import FlightReleaseCard from "./lib/components/organisms/FlightReleaseCard/FlightReleaseCard";
import WeightAndBalanceCalculationsCard from "./lib/components/organisms/WeightAndBalanceCalculationsCard/WeightAndBalanceCalculationsCard";
import TakeoffWeightCalculationCard from "./lib/components/organisms/TakeoffWeightCalculationCard/TakeoffWeightCalculationCard";

interface globalValuesInterface {
  stepGallons: number | null;
  minimumRequired: number | null;
  totalGallons: number | null;
}


export const CalculationsDataContext = createContext<any>({});


export default function Home() {

  const [buttonHover, setButtonHover] = useState<boolean | null>();
  const [active, setActive] = useState<boolean | null>(false);
  const [globalValues, setGlobalValues] = useState<globalValuesInterface>(
    {
      stepGallons: null,
      minimumRequired: null,
      totalGallons: null,
    }
  )


  
 

 

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
          }}
        >
          Begin
        </button>
      </main>

      <SidebarMenu active={active} />

      <FourGridContainer active={active}>
        <CalculationsDataContext.Provider value={{globalValues, setGlobalValues}}>
        <FlightReleaseCard />
      <WeightAndBalanceCalculationsCard />
      <TakeoffWeightCalculationCard />

      <Card
  classAtributes={`col-start-3 col-end-5 row-start-4 row-end-5 grid grid-cols-1 grid-rows-[20%,80%]`}
>
  <h2 className="text-2xl font-semibold underline">Save Flight Plan</h2>
  <div className="flex flex-col items-center gap-4">
    <input
      type="text"
      placeholder="Insert flight plan name"
      className="w-full h-14 rounded-2xl border-b-grey border-2 p-3"
    />
    <button className="w-36 h-10 rounded-2xl bg-primary text-xl font-medium text-white hover:bg-accent hover:text-primary active:bg-green-400 self-end">
      Save
    </button>
  </div>
</Card>
        </CalculationsDataContext.Provider>
          
      </FourGridContainer>
    </div>
  );
}
