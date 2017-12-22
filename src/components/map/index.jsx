import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import autoBind from 'react-autobind';

import Target from './target';
import MapMarker from './marker'

import './style.css';

class Map extends Component {
  constructor(props: Props) {
    super(props);
    autoBind(this);
  }

  renderMarkers() {
    return this.props.markers.map((marker, i) => (
      <MapMarker key={i} lat={marker.coords.lat} lng={marker.coords.lng} weather={marker.weather} />
    ));
  }

  render() {
    return (
      <div className="Map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCTHC292k7auCCGhM_9wK-ArWjNAxz80Z8' }}
          onChange={this.props.onChange}
          center={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.renderMarkers()}
        </GoogleMapReact>
        <Target />
      </div>
    );
  }
}

export default Map;
