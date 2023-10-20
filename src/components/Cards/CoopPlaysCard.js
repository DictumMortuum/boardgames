import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { PlayerContext } from '../../context';
import GenericCard from './GenericCard';

const Component = ({ color }) => {
  const { data: { cooperative } } = React.useContext(PlayerContext);

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
