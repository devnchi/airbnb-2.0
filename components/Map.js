import ReactMapGL from 'react-map-gl'
import { useState } from 'react'
import { getCenter } from 'geolib'

function Map({ searchResults }) {
  // Transform the searchResults object into the
  // { latitude: 52.516272, longtitude: 13.377722 } object

  const coordinates = searchResults.map((result) => ({
      longtitude: result.long,
      latitude: result.lat,
  }))

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longtitude: -122.4376,
    zoom: 5,
  });

  console.log(center) // Error: Invalid LngLat object: (0, NaN) 

  return (
    <ReactMapGL
        mapStyle='mapbox://styles/devnchi/cl0bbgnna000p14qqf696vgcf'
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></ReactMapGL>
  )
}

export default Map