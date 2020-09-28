import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import style from './Maps.module.css';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 59.939164,
  lng: 30.316329
};

const position = {
  lat: 59.939164,
  lng: 30.316329
}

class Maps extends Component {
  render() {
    return (
      <div className={ style.maps }>
        <LoadScript
          googleMapsApiKey={ process.env.REACT_APP_GOOGLE_KEY }
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
          >
            <Marker
              position={position}
            />
          </GoogleMap>
        </LoadScript>
      </div>
    )
  }
}

export { Maps };