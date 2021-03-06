import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { Grid, Menu, Image } from 'semantic-ui-react';

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
      author: '',
    };
  }

  componentDidMount() {
    this.getDataRequest();
    setInterval(() => this.getDataRequest(), 5000);
  }

  async getDataRequest() {
    const markers = await getData();
    this.setState({ markers });
  }

  async handleSubmit() {
    const newMarker = await postData({
      weather: this.state.selectedWeather,
      coords: this.state.center,
      zoom: this.state.zoom,
      author: this.state.author,
    });

    this.setState({
      markers: this.state.markers.concat(newMarker),
    });
  }

  handleMapChange(e) {
    const { center, zoom } = e;
    this.setState({ center, zoom });
  }

  handleInputChange(_, { name, value }) {
    console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    const { center, markers, zoom, selectedWeather } = this.state;

    return (
      <div className="Home">
        <Menu fixed="top" borderless>
          <Image className="Home-image" src="http://www.urltarget.com/images/animals-anteater-animal-ants-ant-cartoon-mammals.png" />
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
          <Grid.Column className="Home-grid-sideview" width={5} color="blue">
            <SideView
              onChange={this.handleInputChange}
              onSubmit={this.handleSubmit}
              onChangeWeather={this.handleSelectWeather}
              onChangeAuthor={this.handleAuthorChange}
              selectedWeather={selectedWeather}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Home;
