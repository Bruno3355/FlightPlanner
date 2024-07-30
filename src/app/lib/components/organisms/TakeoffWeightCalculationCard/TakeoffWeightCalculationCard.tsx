import React, { useState, useContext } from "react";
import Card from "../../molecules/Card/Card";
import { CalculationsDataContext } from "@/app/page";
import isNumberKey from "@/app/lib/functions/isNumberKey/isNumberKey";
import { verifyIfValueIsNumber } from "@/app/lib/functions/FlightReleaseFunctions/FlightReleaseFunctions";

interface takeoffWeightCalculation {
  totalOnBoardTime: number | null;
  totalOnBoardFuel: number | null;
  maximumTakeoffWeight: number;
  basicEmptyWeight: number;
  totalAvailableWeight: number;
  crewWeight: number | null;
}

export default function TakeoffWeightCalculationCard() {
  const { globalValues, setGlobalValues } = useContext(CalculationsDataContext);
  const [takeoffWeightCalculationData, setTakeoffWeightCalculationData] =
    useState<takeoffWeightCalculation>({
      totalOnBoardTime: null,
      totalOnBoardFuel: null,
      maximumTakeoffWeight: 1247,
      basicEmptyWeight: 827,
      totalAvailableWeight: 420,
      crewWeight: null
    });

  const { totalAvailableWeight, crewWeight } =
    takeoffWeightCalculationData;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value !== null) {
      const num = e.currentTarget.valueAsNumber;
      setTakeoffWeightCalculationData((prev) => ({ ...prev, crewWeight: num }));
    }
  };

  const displayMaximumPayload = () => {
    if ((verifyIfValueIsNumber(totalAvailableWeight) && 
      totalAvailableWeight !== null) &&
      (verifyIfValueIsNumber(crewWeight) && 
      crewWeight !== null) &&
      (verifyIfValueIsNumber(globalValues.minimumRequired) &&
      globalValues.minimumRequired !== null)
    ) {
      const calc =
        totalAvailableWeight - globalValues.minimumRequired - crewWeight;
      return calc;
    }
  };

  return (
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
            <td>{globalValues && globalValues.minimumRequired}</td>
          </tr>
          <tr>
            <th>Crew Weight</th>
            <td>
              <input
                type="number"
                className="border-2 border-b-grey rounded text-center"
                onKeyDown={isNumberKey}
                onChange={handleInput}
              />
            </td>
          </tr>
          <tr>
            <th scope="row" className="font-semibold bg-grey_light">
              Maximum Payload
            </th>
            <td className="bg-grey_light">{displayMaximumPayload()}</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
}
