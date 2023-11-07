import React from 'react';
import { PiGraphLight } from 'react-icons/pi';
import GenericCard from './GenericCard';

const Component = ({ color, data: { network_length } }) => {
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
