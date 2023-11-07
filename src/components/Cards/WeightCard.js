import React from 'react';
import { GiWeight } from 'react-icons/gi';
import GenericCard from './GenericCard';

const Component = ({ color, data: { weight } }) => {
  return (
    <GenericCard
      icon={GiWeight}
      color={color}
      primary={`${weight.toFixed(2)}/5`}
      secondary="Average Weight"
    />
  );
}

export default Component;
