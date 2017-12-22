import React from 'react';
import { Form, Button } from 'semantic-ui-react';

import WeatherSelect from '../../components/weather-select';

import './style.css';

const SideView = ({ onSubmit, onChangeWeather, selectedWeather }) => (
  <div className="SideView">
    <Form onSubmit={onSubmit}>
      <WeatherSelect onChange={onChangeWeather} value={selectedWeather} />
      <Button type="submit" disabled={!selectedWeather}>Enviar</Button>
    </Form>
  </div>
);

export default SideView;
