import * as React from 'react';
import { defaultName } from '../../resources/util';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { BoardgameLink } from '../links';
import { Link } from 'react-router-dom';
import { useBoardgameDetails } from '../../hooks/useBoardgameDetails';

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
      <CardHeader sx={{ textAlign: "center" }} title={d.toLocaleDateString("el-gr")} />
      <BoardgameLink id={id}>
        <CardMedia
          component="img"
          image={url || "https://placehold.co/400/5e81ac/FFF"}
        />
      </BoardgameLink>
      {roster.length > 0 && <CardContent>
        <AvatarGroup max={10}>
          {players !== undefined && players.map((d, i) => <PlayerAvatar id={d} key={i} roster={roster} />)}
        </AvatarGroup>
      </CardContent>}
    </Card>
  );
}

export const BoardgameList = ({ id, url, name, date }) => {
  const d = new Date(date);

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {d.toLocaleDateString("el-gr")}
      </TableCell>
      <TableCell align="right">
        <BoardgameLink id={id}>
          <CardMedia
            component="img"
            sx={{ maxWidth: 100 }}
            image={url || "https://placehold.co/400/5e81ac/FFF"}
          />
        </BoardgameLink>
      </TableCell>
      <TableCell>{name}</TableCell>
    </TableRow>
  );
}


export const ReviewBoardgameList = ({ id, category }) => {
  const { loading, data } = useBoardgameDetails({ id, count: -1 });

  if (loading) {
    return <></>
  }

  const { url, name } = data.boardgame;

  return (
    <TableRow>
      <TableCell sx={{ width: "20%" }}>
        <BoardgameLink id={id}>
          <CardMedia
            component="img"
            sx={{ maxWidth: 100 }}
            image={url || "https://placehold.co/400/5e81ac/FFF"}
          />
        </BoardgameLink>
      </TableCell>
      <TableCell sx={{ width: "40%" }}>{category}</TableCell>
      <TableCell sx={{ width: "40%" }}>{name}</TableCell>
    </TableRow>
  );
}

export default Component;
