import * as React from 'react';
import { Link } from 'react-router-dom';

export const BoardgameLink = props => (
  <Link to={`/boardgame/${props.id}`} style={{ textDecoration: 'none', color: "black" }} {...props}>
    {props.children}
  </Link>
)

export const PlayerLink = props => (
  <Link to={`/player/${props.id}`} style={{ textDecoration: 'none', color: "black" }} {...props}>
    {props.children}
  </Link>
)
