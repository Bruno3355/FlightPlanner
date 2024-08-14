import { useState, useEffect } from "react";
import { useCalculationsData } from "../../hooks/CalculationsDataContext";
import Card from "../../molecules/Card/Card";
import isNumberKey from "@/app/lib/functions/isNumberKey/isNumberKey";
import { valueToFixed } from "@/app/lib/functions/FlightReleaseFunctions/FlightReleaseFunctions";

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

  // tripFuelWeight: number | null;
  tripFuelArm: number;
  tripFuelMomentum: number | null;

  landingWeight: number | null;
  landingArm: number | null;
  landingMomentum: number | null;
}

export default function WeightAndBalanceCalculationsCard() {
  const { globalValues } = useCalculationsData();

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

    // tripFuelWeight: null,
    tripFuelArm: 2.413,
    tripFuelMomentum: null,

    landingWeight: null,
    landingArm: null,
    landingMomentum: null,
  });

  const {
    emptyBasicWeight,
    emptyBasicWeightMomentum,
    frontSeatsOccupantsWeight, 
    frontSeatsOccupantsMomentum,
    rearSeatsOccupantsWeight,
    rearSeatsOccupantsMomentum,
    luggageRackWeight,
    luggageRackMomentum,
    zeroFuelWeight,
    zeroFuelArm,
    zeroFuelMomentum,
    fuelWeight,
    fuelArm,
    fuelMomentum,
    takeoffWeight,
    takeoffArm,
    takeoffMomentum,
    tripFuelArm,
    tripFuelMomentum,
    landingWeight,
    landingArm,
    landingMomentum
  } = weightAndBalanceCalculationsData;

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
    armName: string,
    resultState: string
  ) => {
    const armValue =
      weightAndBalanceCalculationsData[
        armName as keyof weightAndBalanceCalculations
      ];
    if (e.currentTarget.value !== null && armValue) {
      const value = e.currentTarget.valueAsNumber;
      const momentumResult = value * armValue;
      setWeightAndBalanceCalculationsData((prev) => ({
        ...prev,
        [key]: value,
        [resultState]: momentumResult,
      }));
    }
  };

  useEffect(() => {
    if (
      emptyBasicWeight !== null &&
      frontSeatsOccupantsWeight !== null &&
      rearSeatsOccupantsWeight !== null &&
      luggageRackWeight !== null
    ) {
      const sum = emptyBasicWeight +
      frontSeatsOccupantsWeight +
      rearSeatsOccupantsWeight +
      luggageRackWeight;
      setWeightAndBalanceCalculationsData((prev) => ({
        ...prev,
        zeroFuelWeight: sum,
      }));
    }

    if(emptyBasicWeightMomentum !== null &&
      frontSeatsOccupantsMomentum !== null &&
      rearSeatsOccupantsMomentum !== null &&
      luggageRackMomentum !== null
    ){
      const momentumSum = emptyBasicWeightMomentum +
      frontSeatsOccupantsMomentum +
      rearSeatsOccupantsMomentum +
      luggageRackMomentum
      setWeightAndBalanceCalculationsData((prev) => ({
        ...prev,
        zeroFuelMomentum: momentumSum,
      }));
    }

    if(zeroFuelWeight !== null && zeroFuelMomentum !== null){
      const armCalc = zeroFuelMomentum / zeroFuelWeight;
      setWeightAndBalanceCalculationsData((prev) => ({...prev, zeroFuelArm: armCalc}))
    }

    if(globalValues.totalGallons !== null && fuelArm !== null){
      const momentumCalc = globalValues.totalGallons * fuelArm;
      setWeightAndBalanceCalculationsData((prev) => ({...prev, fuelMomentum: momentumCalc}))
    }

    if (zeroFuelWeight !== null && globalValues.totalGallons !== null){
      const weightSum = zeroFuelWeight + (globalValues.totalGallons * 2.73);
      setWeightAndBalanceCalculationsData((prev) => ({...prev, takeoffWeight: weightSum}))
    }

    if (zeroFuelArm !== null && fuelArm !== null){
      const armSum = zeroFuelArm + fuelArm;
      setWeightAndBalanceCalculationsData((prev) => ({...prev, takeoffArm: armSum}))
    }

    if(zeroFuelMomentum !== null && fuelMomentum !== null){
      const momentumSum = zeroFuelMomentum + fuelMomentum;
      setWeightAndBalanceCalculationsData((prev) => ({...prev, takeoffMomentum: momentumSum}))
    }
    
    if(globalValues.stepGallons !== null && tripFuelArm !== null){
      const tripFuelMomentum = globalValues.stepGallons * tripFuelArm;
      setWeightAndBalanceCalculationsData((prev) => ({...prev, tripFuelMomentum: tripFuelMomentum}))
    }

    if(globalValues.stepGallons !== null && takeoffWeight !== null){
      const landingWeight = takeoffWeight - (globalValues.stepGallons * 2.73);
      setWeightAndBalanceCalculationsData((prev) => ({...prev, landingWeight: landingWeight}))
    }

    if(takeoffArm !== null && tripFuelArm !== null){
      const armMinus = takeoffArm - tripFuelArm;
      setWeightAndBalanceCalculationsData((prev) => ({...prev, landingArm: armMinus}))
    }

    if(takeoffMomentum !== null && tripFuelMomentum !== null){
      const momentumMinus = takeoffMomentum - tripFuelMomentum;
      setWeightAndBalanceCalculationsData((prev) => ({...prev, landingMomentum: momentumMinus}))
    }

  }, [
    emptyBasicWeight,
    frontSeatsOccupantsWeight,
    rearSeatsOccupantsWeight,
    luggageRackWeight,
    zeroFuelWeight,
    emptyBasicWeightMomentum,
    frontSeatsOccupantsMomentum,
    rearSeatsOccupantsMomentum,
    luggageRackMomentum,zeroFuelMomentum
    ,zeroFuelArm,
    fuelWeight,
    fuelArm,
    fuelMomentum,
    takeoffWeight,
    takeoffArm,
    takeoffMomentum,
    globalValues.totalGallons,
    globalValues.stepGallons,
    tripFuelMomentum,
    landingWeight,
    landingArm,
    landingMomentum,
    tripFuelArm
  ]);

  return (
    <Card
      classAtributes={`col-start-3 col-end-5 row-start-1 row-end-4 grid grid-cols-1 grid-rows-[max-content,80%]`}
    >
      <div className="flex flex-col justify-center h-20">
        <h2 className="text-2xl font-semibold underline">
          Weight and Balance Calculations - P28R
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
              <input
                type="number"
                min="0"
                className="border-2 border-b-grey rounded text-center"
                onChange={(e) =>
                  handleInput(
                    e,
                    "frontSeatsOccupantsWeight",
                    "frontSeatsOccupantsArm",
                    "frontSeatsOccupantsMomentum"
                  )
                }
                onKeyDown={isNumberKey}
              />
            </td>
            <td>2,045</td>
            <td>{valueToFixed(frontSeatsOccupantsMomentum) || ""}</td>
          </tr>
          <tr>
            <th scope="row">Rear Seats Occupants</th>
            <td>
              <input
                type="number"
                min="0"
                className="border-2 border-b-grey rounded text-center"
                onChange={(e) =>
                  handleInput(
                    e,
                    "rearSeatsOccupantsWeight",
                    "rearSeatsOccupantsArm",
                    "rearSeatsOccupantsMomentum"
                  )
                }
                onKeyDown={isNumberKey}
              />
            </td>
            <td>3,000</td>
            <td>{valueToFixed(rearSeatsOccupantsMomentum) || ""}</td>
          </tr>
          <tr>
            <th scope="row">Luggage Rack (Max. 91 kgf)</th>
            <td>
              <input
                type="number"
                min="0"
                className="border-2 border-b-grey rounded text-center"
                onChange={(e) =>
                  handleInput(
                    e,
                    "luggageRackWeight",
                    "luggageRackArm",
                    "luggageRackMomentum"
                  )
                }
                onKeyDown={isNumberKey}
              />
            </td>
            <td>3,627</td>
            <td>{valueToFixed(luggageRackMomentum) || ""}</td>
          </tr>
          <tr>
            <th scope="row">Zero Fuel Weight</th>
            <td>{valueToFixed(zeroFuelWeight) || ""}</td>
            <td>{valueToFixed(zeroFuelArm, 3)}</td>
            <td>{valueToFixed(zeroFuelMomentum)}</td>
          </tr>
          <tr>
            <th scope="row">Fuel (_ Gal x 2,73 kgf/Gal)</th>
            <td>
              {globalValues.totalGallons && (globalValues.totalGallons * (2.73) || "")}
            </td>

            <td>2,413</td>
            <td>{valueToFixed(fuelMomentum) || ""}</td>
          </tr>
          <tr>
            <th scope="row">Takeoff Weight (Max. 1.247 kgf)</th>
            <td>{valueToFixed(takeoffWeight)}</td>
            <td>{valueToFixed(takeoffArm,3)}</td>
            <td>{valueToFixed(takeoffMomentum)}</td>
          </tr>
          <tr>
            <th scope="row">Trip Fuel (_ Gal x 2,73 kgf/Gal)</th>
            <td>{globalValues.stepGallons && (globalValues.stepGallons * 2.73)}</td>
            <td>2,413</td>
            <td>
              {valueToFixed(tripFuelMomentum) || ""}
            </td>
          </tr>
          <tr>
            <th scope="row">Landing Weight (Max. 1.247 kgf)</th>
            <td>{valueToFixed(landingWeight)}</td>
            <td>{valueToFixed(landingArm,3)}</td>
            <td>{valueToFixed(landingMomentum)}</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
}
