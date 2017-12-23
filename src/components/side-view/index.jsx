import React from 'react';
import { Form, Button, Input } from 'semantic-ui-react';

import WeatherSelect from '../../components/weather-select';

import './style.css';

const SideView = ({ onSubmit, onChangeWeather, selectedWeather, onChangeAuthor, author }) => (
  <div className="SideView">
    <Form onSubmit={onSubmit}>
      <WeatherSelect onChange={onChangeWeather} value={selectedWeather} />
      <Input onChange={onChangeAuthor} value={author} placeholder='Seu nome' />
      <Button type="submit" disabled={!selectedWeather}>Enviar</Button>
    </Form>
  </div>
);

export default SideView;
