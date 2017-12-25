import React from 'react';
import { Form } from 'semantic-ui-react';

const weatherOptions = [
  { key: 'sun', icon: 'sun', text: 'Sol', value: 'sun' },
  { key: 'rain', icon: 'rain', text: 'Chuva', value: 'rain' },
];

const WeatherSelect = ({ onChange, value }) => (
  <Form.Select
    name="selectedWeather"
    placeholder="Selecione o clima desejado"
    className="icon"
    onChange={onChange}
    options={weatherOptions}
    value={value}
    fluid
  />
);

export default WeatherSelect;
