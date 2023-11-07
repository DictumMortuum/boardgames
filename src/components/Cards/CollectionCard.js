import React from 'react';
import { BsFillCollectionFill } from 'react-icons/bs';
import GenericCard from './GenericCard';

const Component = ({ color, data: { games } }) => {
  return (
    <GenericCard
      icon={BsFillCollectionFill}
      color={color}
      primary={games}
      secondary="Distinct Games"
    />
  );
}

export default Component;
