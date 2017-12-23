import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';

const weatherLabels = { // TODO: Move to centralized mappings file
  sun: 'Sol',
  rain: 'Chuva',
};

const MapMarker = ({ weather, $hover, author, createdAt }) => (

  <Popup
    trigger={
      <Icon
        className={`MapMarker ${$hover ? 'MapMarker--hover' : ''}`}
        color={weather === 'sun' ? 'yellow' : 'blue'}
        name={weather === 'sun' ? 'sun' : 'rain'}
      />
    }
    content={`
      Pedido de ${weatherLabels[weather]}
      ${author ? 'feito por ' + author : '' }
    `}
  />
);

export default MapMarker;
