import React from 'react';
import { GiPodiumWinner } from 'react-icons/gi';
import GenericCard from './GenericCard';

const Component = ({ color, data: { average_winning_score } }) => {
  return (
    <GenericCard
      icon={GiPodiumWinner}
      color={color}
      primary={average_winning_score.toFixed(1)}
      secondary="Average Winning Score"
    />
  );
}

export default Component;
