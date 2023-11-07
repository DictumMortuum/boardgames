import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import GenericCard from './GenericCard';

const Component = ({ color, data: { cooperative } }) => {
  return (
    <GenericCard
      icon={PlayArrowIcon}
      color={color}
      primary={cooperative}
      secondary="Co-op Plays"
    />
  );
}

export default Component;
