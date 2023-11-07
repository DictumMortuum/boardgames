import React from 'react';
import { GiPodiumWinner } from 'react-icons/gi';
import GenericCard from './GenericCard';

const Component = ({ color, data: { plays3_count, plays3_per } }) => {
  return (
    <GenericCard
      icon={GiPodiumWinner}
      color={color}
      primary={plays3_count === 0 ? "N/A" : (plays3_per * 100).toFixed(2) + "%"}
      secondary="Win Rate"
    />
  );
}

export default Component;
