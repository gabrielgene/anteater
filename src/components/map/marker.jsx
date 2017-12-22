import React from 'react';
import { Icon } from 'semantic-ui-react';

const MapMarker = ({ weather }) => (
  <Icon className="MapMarker" color={weather === 'sun' ? 'yellow' : 'blue'} name="pin" size="huge" />
);

export default MapMarker;
