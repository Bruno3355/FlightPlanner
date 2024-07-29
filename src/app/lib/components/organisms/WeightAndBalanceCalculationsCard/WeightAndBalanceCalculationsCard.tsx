import {useState, useContext} from 'react'
import Card from '../../molecules/Card/Card'
import { CalculationsDataContext } from '@/app/page';



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

export default function weightAndBalanceCalculationsCard() {
  const {globalValues, setGlobalValues} = useContext(CalculationsDataContext);


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
  )
}
