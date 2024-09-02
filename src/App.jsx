import React from 'react';
import Header from './Header';
import GoogleMaps from './GoogleMaps';
import ShipInformation from './ShipInformation';

function App() {
    return (
        <div className='flex p-3'>
            <div className=" flex flex-col  bg-gray-200 ">
                <Header />
                <GoogleMaps />
            </div>
            <ShipInformation />
        </div>
    );
}

export default App;
