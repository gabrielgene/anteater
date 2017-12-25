import React from 'react';
import { Form, Button, Input } from 'semantic-ui-react';

import WeatherSelect from '../../components/weather-select';

import './style.css';

const SideView = ({ onSubmit, selectedWeather, onChange, author }) => (
  <div className="SideView">
    <Form onSubmit={onSubmit}>
      <WeatherSelect onChange={onChange} value={selectedWeather} />
      <Input name="author" className="SideView-input" onChange={onChange} value={author} placeholder='Seu nome' />
      <Button type="submit" disabled={!selectedWeather}>Enviar</Button>
    </Form>
  </div>
);

export default SideView;
