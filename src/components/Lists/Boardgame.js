import * as React from 'react';
import { defaultName } from '../../resources/util';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { BoardgameLink } from '../links';
import { Link } from 'react-router-dom';

const PlayerAvatar = ({ id, roster, ...rest }) => {
  const player = roster.filter(d => d.id === id);

  if (player.length !== 1) {
    return <>{id}</>
  }

  const { url, name } = player[0];

  return (
    <Avatar
      component={Link}
      to={`/player/${id}`}
      src={url}
      alt={name}
      sx={{ textDecoration: 'none'}}
      {...rest}
    >
      {defaultName(name)}
    </Avatar>
  );
}

const Component = ({ id, url, players, date, roster = [] }) => {
  const d = new Date(date);

  return (
    <Card>
      <CardHeader title={d.toLocaleDateString("el-gr")} />
      <BoardgameLink id={id}>
        <CardMedia
          component="img"
          image={url || "https://placehold.co/400/5e81ac/FFF"}
        />
      </BoardgameLink>
      <CardContent>
        <AvatarGroup max={10}>
          {players !== undefined && players.map((d, i) => <PlayerAvatar id={d} key={i} roster={roster} />)}
        </AvatarGroup>
      </CardContent>
    </Card>
  );
}

export default Component;
