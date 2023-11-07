import React from 'react';
import GenericCard from './GenericCard';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Component = ({ color, data: { plays_count } }) => {
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
