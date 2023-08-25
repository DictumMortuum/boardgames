import React from 'react';
import { PlayerContext } from '../context';

export const usePlayer = id => {
  const { data: { player, network } } = React.useContext(PlayerContext);

  if (player.id === id) {
    return {
      id,
      name: player.name[0] + player.surname[0],
      url: player.avatar,
    }
  } else {
    const players = network.filter(d => {
      return d.id === id
    });

    if (players.length !== 1) {
      return {}
    }

    const { id: player_id, url, name } = players[0];

    return {
      id: player_id,
      url,
      name: name.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')
    }
  }
}
