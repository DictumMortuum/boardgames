import React from 'react';
import { GiWeight } from 'react-icons/gi';
import { PlayerContext } from '../../context';
import GenericCard from './GenericCard';

const Component = ({ color }) => {
  const { data: { weight } } = React.useContext(PlayerContext);

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
