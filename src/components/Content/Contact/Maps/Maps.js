import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 59.934280,
  lng: 30.335098
};

class Maps extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey={ process.env.REACT_APP_GOOGLE_KEY }
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
        </GoogleMap>
      </LoadScript>
    )
  }
}

export { Maps };