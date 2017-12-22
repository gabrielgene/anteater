import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Grid, Menu } from 'semantic-ui-react';

import Map from '../../components/map';
import SideView from '../../components/side-view';

import './style.css';

const defaultCenter = { lat: -12.9722, lng: -38.5014 };
const defaultZoom = 14;

class Home extends Component {
  constructor(props: Props) {
    super(props);
    autoBind(this);
    this.state = {
      selectedWeather: null,
      center: defaultCenter,
      zoom: defaultZoom,
      markers: [],
    };
  }

  handleSubmit() {

  }

  handleMapChange(e) {
    const { center, zoom } = e;
    this.setState({ center, zoom })
  }

  handleSelectWeather(_, { value: selectedWeather }) {
    console.log('lbli', { selectedWeather });
    this.setState({ selectedWeather });
  }

  render() {

    const { center, markers, zoom, selectedWeather } = this.state;

    console.log({ selectedWeather });

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
            <Grid.Column
              className="Home-grid-sideview"
              width={5}
              color="blue"
            >
              <SideView
                onSubmit={this.handleSubmit}
                onChangeWeather={this.handleSelectWeather}
                selectedWeather={selectedWeather}
              />
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

export default Home;
