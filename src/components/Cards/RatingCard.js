import React from 'react';
import { BsGraphUpArrow } from 'react-icons/bs';
import { PlayerContext } from '../../context';
import GenericCard from './GenericCard';

const Component = ({ color }) => {
  const { data: { average } } = React.useContext(PlayerContext);

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
