import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Grid, Menu } from 'semantic-ui-react';

import Map from '../../components/map';
import SideView from '../../components/side-view';

import { postData, getData } from '../../fetches';

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

  async componentDidMount() {
    const data = await getData();
    this.setState({
      markers: data,
    });
  }

  async handleSubmit() {
    const newMarker = await postData({
      weather: this.state.selectedWeather,
      coords: this.state.center,
      zoom: this.state.zoom,
    });

    this.setState({
      markers: this.state.markers.concat(newMarker),
    });
  }

  handleMapChange(e) {
    const { center, zoom } = e;
    this.setState({ center, zoom })
  }

  handleSelectWeather(_, { value: selectedWeather }) {
    this.setState({ selectedWeather });
  }

  render() {

    const { center, markers, zoom, selectedWeather } = this.state;

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
