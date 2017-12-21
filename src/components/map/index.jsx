import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Target from './target';
import './style.css';

const defaultCenter = { lat: -12.9722, lng: -38.5014 };

class Map extends Component {
  static defaultProps = {
    center: defaultCenter,
    zoom: 14,
  };

  render() {
    return (
      <div className="Map">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
        <Target />
      </div>
    );
  }
}

export default Map;
