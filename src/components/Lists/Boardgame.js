import * as React from 'react';
import { PlayerContext } from '../../context';
import { defaultName } from '../../resources/util';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Link } from 'react-router-dom';

const PlayerAvatar = ({ id }) => {
  const { data: { network } } = React.useContext(PlayerContext);
  const player = network.filter(d => d.id === id)

  if (player.length !== 1) {
    return <></>
  }

  const { url, name } = player[0];

  return (
    <Link to={`/player/${id}`} style={{ textDecoration: 'none', color: "black" }}>
      <Avatar src={url} alt={name}>{defaultName(name)}</Avatar>
    </Link>
  )
}

const Component = ({ url, players }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={url || "https://placehold.co/400/5e81ac/FFF"}
      />
      <CardContent>
        <AvatarGroup max={10}>
          {players !== undefined && players.map((d, i) => <PlayerAvatar id={d} key={i} />)}
        </AvatarGroup>
      </CardContent>
    </Card>
  )
}

export default Component;
