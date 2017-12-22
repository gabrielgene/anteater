import React from 'react';
import { Icon } from 'semantic-ui-react';

const MapMarker = ({ weather }) => (
  <Icon
    className="MapMarker"
    color={weather === 'sun' ? 'yellow' : 'blue'}
    name={weather === 'sun' ? 'sun' : 'rain'}
    size="huge"
  />
);

export default MapMarker;
