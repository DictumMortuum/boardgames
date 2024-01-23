import React from 'react';
import { GiPodiumWinner } from 'react-icons/gi';
import GenericCard from './GenericCard';
import Grid from '@mui/material/Grid';

const Component = ({ color, data: { max_score, max_time, max_player_id, players } }) => {
  const d = new Date(max_time);

  if (max_player_id === -1) {
    return <></>
  }

  const player = players.filter(d => d.id === max_player_id);
  const { name } = player[0];

  return (
    <Grid container>
      <Grid xs={3}>
        <GenericCard
          icon={GiPodiumWinner}
          color={color}
          primary={max_score}
          secondary="Max Score"
        />
      </Grid>
      <Grid xs={3}>
        <GenericCard
          icon={GiPodiumWinner}
          color={color}
          primary={d.toLocaleDateString("el-gr")}
          secondary="Max Date"
        />
      </Grid>
      <Grid xs={3}>
        <GenericCard
          icon={GiPodiumWinner}
          color={color}
          primary={name}
          secondary="Max Score Holder"
        />
      </Grid>
    </Grid>
  );
}

export default Component;
