import {APIProvider, Map} from '@vis.gl/react-google-maps';

const GoogleMaps = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  return (
    <div className='p-2'>
    <APIProvider apiKey='AIzaSyBypKm-up1ctMQO-oL-3sEeP6ZzERoKvSs'>
    <Map
      style={{width: '70vw', height: '80vh'}}
      defaultCenter={{lat: 53.54992, lng: 10.00678}}
      defaultZoom={5}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
      
    />
  </APIProvider>
  </div>
  )
}

export default GoogleMaps