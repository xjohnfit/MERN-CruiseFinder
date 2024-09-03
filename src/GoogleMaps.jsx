import { APIProvider, Map } from '@vis.gl/react-google-maps';

const GoogleMaps = () => {
    
    return (
        <APIProvider apiKey={import.meta.env.VITE_MAPS_API_KEY}>
            <Map
                style={{
                    width: '100vw',
                    height: '70vh',
                    padding: '20px',
                    margin: '0',
                }}
                defaultCenter={{ lat: 5.54992, lng: 1.00678 }}
                defaultZoom={3}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
            />
            
        </APIProvider>
    );
};

export default GoogleMaps;
