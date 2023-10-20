import React from 'react';
import Avatar from '@mui/material/Avatar';

const Component = ({ color, icon, size = 128 }) => {
  let Icon = icon;

  return (
    <Avatar sx={{ width: size, height: size, backgroundColor: "rgba(255, 255, 255, 0.7)" }} variant="rounded">
      <Icon style={{ width: size/2, height: size/2, color: `${color}Fa` }} />
    </Avatar>
  );
}

export default Component;
