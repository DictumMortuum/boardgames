import React from 'react';
import { FaHandshake } from 'react-icons/fa';
import GenericCard from './GenericCard';

const Component = ({ color, data: { cooperative_count, cooperative_per } }) => {
  return (
    <GenericCard
      icon={FaHandshake}
      color={color}
      primary={cooperative_count === 0 ? "N/A" : (cooperative_per * 100).toFixed(2) + "%"}
      secondary="Co-op Win Rate"
    />
  );
}

export default Component;
