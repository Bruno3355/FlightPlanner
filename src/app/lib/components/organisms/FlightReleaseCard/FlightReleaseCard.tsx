import {useState} from 'react'
import Card from '../../molecules/Card/Card'
import { minimumRequiredTime, timeInputSetChange, verifyIfValueIsNumber, totalGallonsPerMinute, totalMinimumRequiredGallons, totalOnBoard } from '@/app/lib/functions/FlightReleaseFunctions/FlightReleaseFunctions'

interface flightRelease {
    step: any;
    alternate: any;
    reserve: any;
    minimumRequired: any;
    additional: any;
  }

export default function FlightReleaseCard() {
    const [flightReleaseData, setFlightReleaseData] = useState<flightRelease>({
        step: null,
        alternate: null,
        reserve: null,
        minimumRequired: null,
        additional: null,
      });
    
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
              onChange={(e) => timeInputSetChange(e, "step", setFlightReleaseData)}
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
              onChange={(e) => timeInputSetChange(e, "alternate", setFlightReleaseData)}
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
              onChange={(e) => timeInputSetChange(e, "reserve", setFlightReleaseData)}
            />
          </td>
          <td>
            {verifyIfValueIsNumber(flightReleaseData.reserve) &&
              totalGallonsPerMinute(flightReleaseData.reserve)}
          </td>
        </tr>
        <tr>
          <th scope="row">Minimum Required</th>
          <td>{minimumRequiredTime(flightReleaseData.step, flightReleaseData.alternate, flightReleaseData.reserve)}</td>
          <td>{totalMinimumRequiredGallons(flightReleaseData.step, flightReleaseData.alternate, flightReleaseData.reserve)}</td>
        </tr>
        <tr>
          <th scope="row">Additional</th>
          <td>
            <input
              type="time"
              className="w-full h-full text-center"
              onChange={(e) => timeInputSetChange(e, "additional", setFlightReleaseData)}
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
{totalOnBoard(flightReleaseData.step, flightReleaseData.alternate, flightReleaseData.reserve, flightReleaseData.additional)}
          </td>
          <td>{verifyIfValueIsNumber(flightReleaseData.additional) && ( totalMinimumRequiredGallons(flightReleaseData.step, flightReleaseData.alternate, flightReleaseData.reserve) + totalGallonsPerMinute(flightReleaseData.additional))}</td>
        </tr>
      </tfoot>
    </table>
  </Card>
)
}
