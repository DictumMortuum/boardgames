import React from 'react';
import { PiGraphLight } from 'react-icons/pi';
import { PlayerContext } from '../../context';
import GenericCard from './GenericCard';

const Component = ({ color }) => {
  const { data: { network_length } } = React.useContext(PlayerContext);

  return (
    <GenericCard
      icon={PiGraphLight}
      color={color}
      primary={`${network_length} people`}
      secondary="Network"
    />
  );
}

export default Component;
