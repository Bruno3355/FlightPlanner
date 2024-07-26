"use client";
import { useState } from "react";
import Image from "next/image";

import Card from "./lib/components/molecules/Card/Card";
import SidebarMenu from "./lib/components/organisms/SidebarMenu/SidebarMenu";
import Stripes from "./lib/components/molecules/Stripes/Stripes";
import FourGridContainer from "./lib/components/templates/FourGridContainer/FourGridContainer";
import FlightReleaseCard from "./lib/components/organisms/FlightReleaseCard/FlightReleaseCard";


interface globalValuesInterface {
  stepGallons: number | null;
  minimumRequired: number | null;
  totalGallons: number | null;
}

interface takeoffWeightCalculation {
  totalOnBoardTime: number | null;
  totalOnBoardFuel: number | null;
  maximumTakeoffWeight: number;
  basicEmptyWeight: number;
  totalAvailableWeight: number;
  minimumFuelRequired: number | null;
  creWeight: number | null;
  maximumPayload: number | null;
}

interface weightAndBalanceCalculations {
  emptyBasicWeight: number;
  emptyBasicWeightArm: number;
  emptyBasicWeightMomentum: number;

  frontSeatsOccupantsWeight: number | null;
  frontSeatsOccupantsArm: number;
  frontSeatsOccupantsMomentum: number | null;

  rearSeatsOccupantsWeight: number | null;
  rearSeatsOccupantsArm: number;
  rearSeatsOccupantsMomentum: number | null;

  luggageRackWeight: number | null;
  luggageRackArm: number;
  luggageRackMomentum: number | null;

  zeroFuelWeight: number | null;
  zeroFuelArm: number | null;
  zeroFuelMomentum: number | null;

  fuelWeight: number | null;
  fuelArm: number;
  fuelMomentum: number | null;

  takeoffWeight: number | null;
  takeoffArm: number | null;
  takeoffMomentum: number | null;

  tripFuelWeight: number | null;
  tripFuelArm: number;
  tripFuelMomentum: number | null;

  landingWeight: number | null;
  landingArm: number | null;
  landingMomentum: number | null;
}

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


  const [takeoffWeightCalculationData, setTakeoffWeightCalculationData] =
    useState<takeoffWeightCalculation>({
      totalOnBoardTime: null,
      totalOnBoardFuel: null,
      maximumTakeoffWeight: 1247,
      basicEmptyWeight: 827,
      totalAvailableWeight: 420,
      minimumFuelRequired: null,
      creWeight: null,
      maximumPayload: null,
    });

  const [
    weightAndBalanceCalculationsData,
    setWeightAndBalanceCalculationsData,
  ] = useState<weightAndBalanceCalculations>({
    emptyBasicWeight: 827.7,
    emptyBasicWeightArm: 2.174,
    emptyBasicWeightMomentum: 1799.5,

    frontSeatsOccupantsWeight: null,
    frontSeatsOccupantsArm: 2.045,
    frontSeatsOccupantsMomentum: null,

    rearSeatsOccupantsWeight: null,
    rearSeatsOccupantsArm: 3.0,
    rearSeatsOccupantsMomentum: null,

    luggageRackWeight: null,
    luggageRackArm: 3.627,
    luggageRackMomentum: null,

    zeroFuelWeight: null,
    zeroFuelArm: null,
    zeroFuelMomentum: null,

    fuelWeight: null,
    fuelArm: 2.413,
    fuelMomentum: null,

    takeoffWeight: null,
    takeoffArm: null,
    takeoffMomentum: null,

    tripFuelWeight: null,
    tripFuelArm: 2.413,
    tripFuelMomentum: null,

    landingWeight: null,
    landingArm: null,
    landingMomentum: null,
  });

 

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
          <FlightReleaseCard />

        <Card
          classAtributes={`col-start-3 col-end-5 row-start-1 row-end-4 grid grid-cols-1 grid-rows-[20%,80%]`}
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold underline">
              Weight and Balance Calculations
            </h2>
          </div>
          <table>
            <thead className="bg-grey">
              <tr>
                <th scope="col">Items</th>
                <th scope="col">Weight (kgf)</th>
                <th scope="col">Arm (m)</th>
                <th scope="col">Momentum (kgf x m)</th>
              </tr>
            </thead>
            <tbody className="[&>tr>th]:text-left [&>tr>th]:pl-2 [&>tr>td]:text-center">
              <tr>
                <th scope="row">Empty basic Weight</th>
                <td>827,7</td>
                <td>2,174</td>
                <td>1799,5</td>
              </tr>
              <tr>
                <th scope="row">Front Seats Occupants</th>
                <td>
                  <input type="number" min="0" />
                </td>
                <td>2,045</td>
                <td>
                  <input type="number" min="0" />
                </td>
              </tr>
              <tr>
                <th scope="row">Rear Seats Occupants</th>
                <td>
                  <input type="number" min="0" />
                </td>
                <td>3,000</td>
                <td>
                  <input type="number" min="0" />
                </td>
              </tr>
              <tr>
                <th scope="row">Luggage Rack (Max. 91 kgf)</th>
                <td>
                  <input type="number" min="0" />
                </td>
                <td>3,627</td>
                <td>
                  <input type="number" min="0" />
                </td>
              </tr>
              <tr>
                <th scope="row">Zero Fuel Weight</th>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
              </tr>
              <tr>
                <th scope="row">Fuel (_ Gal x 2,73 kgf/Gal)</th>
                <td>
                  <input type="number" min="0" />
                </td>

                <td>2,413</td>
                <td>
                  <input type="number" min="0" />
                </td>
              </tr>
              <tr>
                <th scope="row">Takeoff Weight (Max. 1.247 kgf)</th>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
              </tr>
              <tr>
                <th scope="row">Trip Fuel (_ Gal x 2,73 kgf/Gal)</th>
                <td>
                  <input type="number" min="0" />
                </td>
                <td>2,413</td>
                <td>
                  <input type="number" min="0" />
                </td>
              </tr>
              <tr>
                <th scope="row">Landing Weight (Max. 1.247 kgf)</th>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
                <td>Lorem ipsum</td>
              </tr>
            </tbody>
          </table>
        </Card>

        <Card
          classAtributes={`col-start-1 col-end-3 row-start-3 row-end-5 grid grid-cols-1 grid-rows-[20%,80%]`}
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold underline">
              Takeoff Weight Calculation
            </h2>
          </div>
          <table>
            <tbody>
              <tr>
                <th scope="col">Maximum Takeoff Weight</th>
                <td className="font-semibold">1.247 Kgf</td>
              </tr>
              <tr>
                <th scope="row">Basic Empty Weight (BEW)</th>
                <td>827 Kgf</td>
              </tr>
              <tr>
                <th scope="row" className="font-semibold bg-grey_light">
                  Total Available Weight
                </th>
                <td className="bg-grey_light font-semibold">420 kgf</td>
              </tr>
              <tr>
                <th scope="row">Minimum Fuel Required (MFR)</th>
                <td>Lorem Ipsum</td>
              </tr>
              <tr>
                <th>Crew Weight</th>
                <td>
                  <input type="number" min="0" />
                </td>
              </tr>
              <tr>
                <th scope="row" className="font-semibold bg-grey_light">
                  Maximum Payload
                </th>
                <td className="bg-grey_light">Lorem Ipsum</td>
              </tr>
            </tbody>
          </table>
        </Card>

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
      </FourGridContainer>
    </div>
  );
}
