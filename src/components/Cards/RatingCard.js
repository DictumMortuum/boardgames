import React from 'react';
import { BsGraphUpArrow } from 'react-icons/bs';
import GenericCard from './GenericCard';

const Component = ({ color, data: { average } }) => {
  return (
    <GenericCard
      icon={BsGraphUpArrow}
      color={color}
      primary={`${average.toFixed(2)}/10`}
      secondary="Average Rating"
    />
  );
}

export default Component;
