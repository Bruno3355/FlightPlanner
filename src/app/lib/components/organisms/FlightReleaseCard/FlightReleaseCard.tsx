import { useState } from 'react';
import Card from '../../molecules/Card/Card';
import { minimumRequiredTime, verifyIfValueIsNumber, totalGallonsPerMinute, totalOnBoard, converTimeToMinutes } from '@/app/lib/functions/FlightReleaseFunctions/FlightReleaseFunctions';

interface FlightRelease {
  step: number | null;
  alternate: number | null;
  reserve: number | null;
  minimumRequired: number | null;
  additional: number | null;
}

export default function FlightReleaseCard() {
  const [flightReleaseData, setFlightReleaseData] = useState<FlightRelease>({
    step: null,
    alternate: null,
    reserve: null,
    minimumRequired: null,
    additional: null,
  });

  const updateFlightReleaseData = (objectKey: string, value: number | null) => {
    setFlightReleaseData(prev => {
      const updatedData = { ...prev, [objectKey]: value };

      // Atualizar minimumRequired sempre que step, alternate ou reserve mudar
      if (updatedData.step !== null && updatedData.alternate !== null && updatedData.reserve !== null) {
        const newMinimumRequired = totalGallonsPerMinute(updatedData.step) +
                                    totalGallonsPerMinute(updatedData.alternate) +
                                    totalGallonsPerMinute(updatedData.reserve);
        updatedData.minimumRequired = newMinimumRequired;
      }

      return updatedData;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const timeString = e.target.value;
    const minutes = converTimeToMinutes(timeString);
    updateFlightReleaseData(key, minutes);
  };

  return (
    <Card classAtributes={`col-start-1 col-end-3 row-start-1 row-end-3 grid grid-cols-1 grid-rows-[20%,80%]`}>
      <div className="flex flex-col justify-center">
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
                className="w-full h-full text-center"
                onChange={(e) => handleInputChange(e, 'step')}
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
                className="w-full h-full text-center"
                onChange={(e) => handleInputChange(e, 'alternate')}
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
                className="w-full h-full text-center"
                onChange={(e) => handleInputChange(e, 'reserve')}
              />
            </td>
            <td>
              {verifyIfValueIsNumber(flightReleaseData.reserve) &&
                totalGallonsPerMinute(flightReleaseData.reserve)}
            </td>
          </tr>
          <tr>
            <th scope="row">Minimum Required</th>
            <td>{minimumRequiredTime(flightReleaseData.step || 0, flightReleaseData.alternate || 0, flightReleaseData.reserve || 0)}</td>
            <td>{verifyIfValueIsNumber(flightReleaseData.minimumRequired) && flightReleaseData.minimumRequired}</td>
          </tr>
          <tr>
            <th scope="row">Additional</th>
            <td>
              <input
                type="time"
                className="w-full h-full text-center"
                onChange={(e) => handleInputChange(e, 'additional')}
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
              {totalOnBoard(flightReleaseData.step || 0, flightReleaseData.alternate || 0, flightReleaseData.reserve || 0, flightReleaseData.additional || 0)}
            </td>
            <td>{verifyIfValueIsNumber(flightReleaseData.additional) &&
                (flightReleaseData.minimumRequired || 0 + totalGallonsPerMinute(flightReleaseData.additional))}
            </td>
          </tr>
        </tfoot>
      </table>
      <button onClick={() => console.log(flightReleaseData.minimumRequired)}>Console</button>
    </Card>
  );
}