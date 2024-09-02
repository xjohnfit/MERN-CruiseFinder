import { useState } from "react";
const ShipInformation = () => {

    const [shipInfo, setShipInfo] = useState(null);

  return (
    <div className="flex justify-center w-full bg-slate-200 border border-l-blue-500 align-middle">
        
        {!shipInfo && <h1 className="text-2xl font-thin">Search for a ship to see more information</h1>}
    </div>
  )
}

export default ShipInformation