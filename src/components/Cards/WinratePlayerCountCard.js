import React from 'react';
import { GiPodiumWinner } from 'react-icons/gi';
import { PlayerContext } from '../../context';
import GenericCard from './GenericCard';

const Component = ({ color, id, aggregate = false }) => {
  const { data: { player_counts } } = React.useContext(PlayerContext);

  let Won, Count;
  if (player_counts[id] !== undefined) {
    Won = player_counts[id].Won;
    Count = player_counts[id].Count;
  } else {
    Count = 0;
  }

  if (aggregate) {
    Object.keys(player_counts).map(d => {
      const i = parseInt(d);
      const key = parseInt(id);

      if (i > key) {
        Won += player_counts[d].Won;
        Count += player_counts[d].Count;
      }

      return d;
    })
  }

  return (
    <GenericCard
      icon={GiPodiumWinner}
      color={color}
      primary={Count === 0 ? "N/A" : (Won/Count * 100).toFixed(2) + "%"}
      secondary={`${id}${aggregate ? "+" : ""}-player Wins`}
    />
  );
}

export default Component;
