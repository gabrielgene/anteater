import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';

import './style.css';

const Home = () => (
  <div className="Home">
    <Menu fixed='top' inverted borderless>
      <Menu.Item header>Anteater</Menu.Item>
    </Menu>
    <Grid className="Home-grid">
      <Grid.Column width={10} color="red">
        Map
      </Grid.Column>
      <Grid.Column width={6} color="blue">
        Sideview
      </Grid.Column>
    </Grid>
  </div>
);

export default Home;
