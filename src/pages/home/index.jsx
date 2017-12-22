import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Grid, Menu } from 'semantic-ui-react';

import Map from '../../components/map';
import WeatherSelect from '../../components/weather-select/index'

import './style.css';

const defaultCenter = { lat: -12.9722, lng: -38.5014 };
const defaultZoom = 14;

class Home extends Component {
  constructor(props: Props) {
    super(props);
    autoBind(this);
    this.state = {
      center: defaultCenter,
      zoom: defaultZoom,
      markers: [],
    };
  }

  handleMapChange(e) {
    console.log({ e });
    console.log('markers: ', this.state.markers);

    const { center, zoom } = e;

    this.setState({
      center,
      zoom,
      // markers: this.state.markers.concat({ lat: center.lat, lng: center.lng }),
    })
  }

  handleSelectWeather(e) {
    console.log('select weather: ', e);
  }


  render() {

    const { center, markers, zoom } = this.state;

    return (
      <div className="Home">
          <Menu fixed='top' inverted borderless>
            <Menu.Item header>Anteater</Menu.Item>
          </Menu>
          <Grid className="Home-grid">
            <Grid.Column className="Home-grid-map" width={11}>
              <Map
                onChange={this.handleMapChange}
                center={center}
                zoom={zoom}
                markers={markers}
              />
            </Grid.Column>
            <Grid.Column width={5} color="blue">
              <WeatherSelect onChange={this.handleSelectWeather} />
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

export default Home;
