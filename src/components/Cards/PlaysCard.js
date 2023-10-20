import React from 'react';
// import { GiPodiumWinner } from 'react-icons/gi';
import { PlayerContext } from '../../context';
import GenericCard from './GenericCard';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Component = ({ color }) => {
  const { data: { plays_count } } = React.useContext(PlayerContext);

  return (
    <GenericCard
      icon={PlayArrowIcon}
      color={color}
      primary={plays_count}
      secondary="Plays"
    />
  );
}

export default Component;
