import { useState } from "react";
const ShipInformation = () => {

    const [shipInfo, setShipInfo] = useState(null);
  return (
    <div className="bg-slate-200 border border-blue-500 rounded-lg flex justify-center m-3 ">
        
        {!shipInfo && <h1 className="lg:text-2xl font-thin p-3">Search for a ship name to see it's information</h1>}
        {shipInfo}
    </div>
  )
}

export default ShipInformation