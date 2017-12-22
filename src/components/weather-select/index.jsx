import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const WeatherSelect = (props) => {


  const handleChange = (e) => {
    console.log('test');
    console.log(e);
  }

  return (
    <Dropdown
      text='weather'
      icon='options'
      floating
      labeled
      button
      className='icon'
      onChange={handleChange}
    >
      <Dropdown.Menu>
        <Dropdown.Item icon='sun' text='Sol' value="sol" />
        <Dropdown.Item icon='rain' text='Chuva' value="rain" />
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default WeatherSelect