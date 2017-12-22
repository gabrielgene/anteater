import React from 'react';
import GoogleMapReact from 'google-map-react';

import config from '../../config';
import Target from './target';
import MapMarker from './marker';

import './style.css';

const renderMarkers = markers => markers.map((marker, i) => (
  <MapMarker
    key={i}
    lat={marker.coords.lat}
    lng={marker.coords.lng}
    weather={marker.weather}
  />
));

const Map = ({ onChange, center, zoom, markers }) => (
  <div className="Map">
    <GoogleMapReact
      bootstrapURLKeys={{ key: config.GOOGLE_MAP_API_KEY }}
      onChange={onChange}
      center={center}
      defaultZoom={zoom}
    >
      {renderMarkers(markers)}
    </GoogleMapReact>
    <Target />
  </div>
);

export default Map;
