import React from 'react';
import Header from './Header';
import GoogleMaps from './GoogleMaps';
import ShipInformation from './ShipInformation';

function App() {
    const handleOnSearchChange = (searchData) => {
        console.log(searchData);
    };

    return (
        <div className="lg:flex-col sm:flex-row justify-center">
            <div className="flex-col">
                <Header onSearchChange={handleOnSearchChange} />
                <GoogleMaps />
            </div>
            <div>
                <ShipInformation />
            </div>
        </div>
    );
}

export default App;
