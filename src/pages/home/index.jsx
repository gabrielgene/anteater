import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import Map from '../../components/map';

import './style.css';

const Home = () => (
  <div className="Home">
    <Menu fixed='top' inverted borderless>
      <Menu.Item header>Anteater</Menu.Item>
    </Menu>
    <Grid className="Home-grid">
      <Grid.Column className="Home-grid-map" width={11}>
        <Map />
      </Grid.Column>
      <Grid.Column width={5} color="blue">
        Sideview
      </Grid.Column>
    </Grid>
  </div>
);

export default Home;
