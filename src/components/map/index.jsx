import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import autoBind from 'react-autobind';

import Target from './target';
import MapMarker from './marker'

import './style.css';
import marker from './marker';


class Map extends Component {
  constructor(props: Props) {
    super(props);
    autoBind(this);
  }

  renderMarkers() {
    return this.props.markers.map((marker, i) => (
      <MapMarker key={i} {...marker} />
    ));
  }

  render() {
    return (
      <div className="Map">
        <GoogleMapReact
          onChange={this.props.onChange}
          defaultCenter={this.props.center}
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
