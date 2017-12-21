import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import autoBind from 'react-autobind';

import Target from './target';
import MapMarker from './marker'

import './style.css';
import marker from './marker';

const defaultCenter = { lat: -12.9722, lng: -38.5014 };
const defaultZoom = 14;


class Map extends Component {
  constructor(props: Props) {
    super(props);
    autoBind(this);
    this.state = {
      center: defaultCenter || props.center,
      zoom: defaultZoom || props.zoom,
      markers: [],
    };
  }

  static defaultProps = {
    center: defaultCenter,
    zoom: defaultZoom,
  };

  handleChange(e) {
    console.log({ e });
    console.log('markers: ', this.state.markers);

    this.setState({
      markers: this.state.markers.concat({ lat: e.center.lat, lng: e.center.lng }),
    })
  }

  renderMarkers() {
    return this.state.markers.map(marker => (
      <MapMarker {...marker} />
    ));
  }

  render() {
    return (
      <div className="Map">
        <GoogleMapReact
          onChange={this.handleChange}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          {this.renderMarkers()}
        </GoogleMapReact>
        <Target />
      </div>
    );
  }
}

export default Map;
