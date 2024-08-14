import { useState, useEffect, useMemo } from "react";
import {useCalculationsData} from "../../hooks/CalculationsDataContext"
import Card from "../../molecules/Card/Card";
import {
  minimumRequiredTime,
  verifyIfValueIsNumber,
  totalGallonsPerMinute,
  totalOnBoard,
  converTimeToMinutes,
  totalBoardGallons
} from "@/app/lib/functions/FlightReleaseFunctions/FlightReleaseFunctions";

interface FlightRelease {
  step: number | null;
  alternate: number | null;
  reserve: number | null;
  minimumRequired: any;
  additional: number | null;
  totalGallons: number | null;
}

export default function FlightReleaseCard() {
  const { setGlobalValues } = useCalculationsData();
  const [flightReleaseData, setFlightReleaseData] = useState<FlightRelease>({
    step: null,
    alternate: null,
    reserve: null,
    minimumRequired: null,
    additional: null,
    totalGallons: null,
  });


  const updateFlightReleaseData = (objectKey: string, value: number | null) => {
    setFlightReleaseData((prev) => {
      const updatedData = { ...prev, [objectKey]: value };

      if (
        updatedData.step !== null &&
        updatedData.alternate !== null &&
        updatedData.reserve !== null
      ) {
        const stepTotalGallons = totalGallonsPerMinute(updatedData.step);
        const alternateTotalGallons = totalGallonsPerMinute(updatedData.alternate);
        const reserveTotalGallons = totalGallonsPerMinute(updatedData.reserve);

        if (stepTotalGallons < 0 || alternateTotalGallons < 0 || reserveTotalGallons < 0) {
          const newMinimumRequired = "";
          updatedData.minimumRequired = newMinimumRequired;
        } else {
          const newMinimumRequired =
          stepTotalGallons +
          alternateTotalGallons +
          reserveTotalGallons;
        updatedData.minimumRequired = newMinimumRequired;
        }
      }

      return updatedData;
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const timeString = e.target.value;
    const minutes = converTimeToMinutes(timeString);
    updateFlightReleaseData(key, minutes);
  };

  const flightDataMemo = useMemo(() => {
    return {
      stepGallons: totalGallonsPerMinute(flightReleaseData.step),
      minimumRequired: flightReleaseData.minimumRequired,
      totalGallons: totalBoardGallons(flightReleaseData.additional, flightReleaseData.minimumRequired)
    }
  }, [flightReleaseData.step,
    flightReleaseData.additional,
    flightReleaseData.minimumRequired
    ])

    useEffect(() => {
      setGlobalValues((prev: any) => ({
        ...prev,
        ...flightDataMemo
      }))
    }, [flightDataMemo, setGlobalValues])

  return (
    <Card
      classAtributes={`col-start-1 col-end-3 row-start-1 row-end-3 grid grid-cols-1 grid-rows-[max-content,80%]`}
    >
      <div className="flex flex-col justify-center h-20">
        <h2 className="text-2xl font-semibold underline">Flight Release</h2>
        <h3 className="font-medium">Autonomy calculation</h3>
      </div>
      <table>
        <thead className="bg-grey">
          <tr>
            <th scope="col"></th>
            <th scope="col">Time (hh:mm)</th>
            <th scope="col">Fuel (US Gallons)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Step</th>
            <td>
              <input
                type="time"
                className="w-full h-full border-2 border-b-grey rounded text-center"
                onChange={(e) => handleInputChange(e, "step")}
              />
            </td>
            <td>
              {verifyIfValueIsNumber(flightReleaseData.step) &&
                totalGallonsPerMinute(flightReleaseData.step)}
            </td>
          </tr>
          <tr>
            <th scope="row">Alternate</th>
            <td>
              <input
                type="time"
                className="w-full h-full border-2 border-b-grey rounded text-center"
                onChange={(e) => handleInputChange(e, "alternate")}
              />
            </td>
            <td>
              {verifyIfValueIsNumber(flightReleaseData.alternate) &&
                totalGallonsPerMinute(flightReleaseData.alternate)}
            </td>
          </tr>
          <tr>
            <th scope="row">Reserve</th>
            <td>
              <input
                type="time"
                className="w-full h-full border-2 border-b-grey rounded text-center"
                onChange={(e) => handleInputChange(e, "reserve")}
              />
            </td>
            <td>
              {verifyIfValueIsNumber(flightReleaseData.reserve) &&
                totalGallonsPerMinute(flightReleaseData.reserve)}
            </td>
          </tr>
          <tr>
            <th scope="row">Minimum Required</th>
            <td>
              {minimumRequiredTime(
                flightReleaseData.step,
                flightReleaseData.alternate,
                flightReleaseData.reserve
              )}
            </td>
            <td>
              {verifyIfValueIsNumber(flightReleaseData.minimumRequired) &&
                flightReleaseData.minimumRequired}
            </td>
          </tr>
          <tr>
            <th scope="row">Additional</th>
            <td>
              <input
                type="time"
                className="w-full h-full border-2 border-b-grey rounded text-center"
                onChange={(e) => handleInputChange(e, "additional")}
              />
            </td>
            <td>
              {verifyIfValueIsNumber(flightReleaseData.additional) &&
                totalGallonsPerMinute(flightReleaseData.additional)}
            </td>
          </tr>
        </tbody>
        <tfoot className="bg-grey">
          <tr>
            <th scope="row">Total on Board</th>
            <td>
              {totalOnBoard(
                flightReleaseData.step,
                flightReleaseData.alternate,
                flightReleaseData.reserve,
                flightReleaseData.additional
              )}
            </td>
            <td>{totalBoardGallons(flightReleaseData.additional, flightReleaseData.minimumRequired)}</td>
          </tr>
        </tfoot>
      </table>
    </Card>
  );
}
