import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';
import classNames from 'classnames';

const weatherLabels = { // TODO: Move to centralized mappings file
  sun: 'Sol',
  rain: 'Chuva',
};

const MapMarker = ({ weather, $hover, author, createdAt }) => (

  <Popup
    trigger={
      <Icon
        className={classNames('MapMarker', {'MapMarker--hover': $hover})}
        color={weather === 'sun' ? 'yellow' : 'blue'}
        name={weather}
      />
    }
    content={`
      Pedido de ${weatherLabels[weather]}
      ${author ? 'feito por ' + author : '' }
    `}
  />
);

export default MapMarker;
