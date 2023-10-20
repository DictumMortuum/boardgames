import React from 'react';
import { BsFillCollectionFill } from 'react-icons/bs';
import { PlayerContext } from '../../context';
import GenericCard from './GenericCard';

const Component = ({ color }) => {
  const { data: { games } } = React.useContext(PlayerContext);

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
