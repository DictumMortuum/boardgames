import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Title from './Title';
import Icon from './Icon';
// import PositionBadge from './PositionBadge';
import { AvatarGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import { usePlayer } from '../hooks/usePlayer';

const PlayerAvatar = ({ id }) => {
  const { url, name } = usePlayer(id);

  return (
    <Link to={`/player/${id}`} style={{ textDecoration: 'none', color: "black" }}>
      <Avatar src={url} alt={name}>{name}</Avatar>
    </Link>
  )
}

const Item = ({ url, name, player_id, winners, players }) => (
  <Grid item xs={12} md={3} mb={2}>
    <Stack alignItems="center" gap={2}>
      {/*  */}
        <Icon url={url}  />
      {/* </PositionBadge> */}
      <AvatarGroup max={10}>
        {players !== undefined && players.map(d => <PlayerAvatar id={d} />)}
      </AvatarGroup>
    </Stack>
  </Grid>
)

const Component = ({ player_id, name, data }) => {
  return (
    <Grid container spacing={2} p={4}>
      <Grid item xs={12}>
        <Title>
          {name}
        </Title>
      </Grid>
      {data.map((d, i) => <Item key={i} player_id={player_id} {...d} />)}
    </Grid>
  )
}

export default Component;
