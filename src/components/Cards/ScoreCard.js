import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import GenericCard from './GenericCard';

const Component = ({ color, data: { average_score } }) => {
  return (
    <GenericCard
      icon={PlayArrowIcon}
      color={color}
      primary={average_score.toFixed(1)}
      secondary="Average Score"
    />
  );
}

export default Component;
