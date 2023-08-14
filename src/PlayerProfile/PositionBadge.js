import * as React from 'react';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import {
  GiPodiumWinner,
  GiPodiumSecond,
  GiPodiumThird,
} from 'react-icons/gi';

const ToObject = position => {
  switch(position) {
  case 0:
    return GiPodiumWinner
  case 1:
    return GiPodiumSecond
  case 2:
    return GiPodiumThird
  default:
    return () => ""
  }
}

const Component = ({ position, size = 30, children })=> {
  const Icon = ToObject(position)

  return (
    <Badge
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      badgeContent={
        <Avatar
          sx={{ bgcolor: "#4c566a", width: size, height: size }}
        >
          <Icon
            style={{ color: "#eceff4" }}
          />
        </Avatar>
      }
      invisible={position !== 0}
      overlap="circular"
    >
      {children}
    </Badge>
  );
}

export default Component;
