import React from 'react';
import Avatar from './Avatar';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import { Paper } from '@mui/material';
import { Stack, Typography } from '@mui/material';

// const Component = ({ color = "#5e81ac", icon, primary, secondary }) => (
//   <ListItem>
//     <ListItemAvatar>
//       <Avatar icon={icon} color={color} size={64} />
//     </ListItemAvatar>
//     <ListItemText primary={primary} secondary={secondary} />
//   </ListItem>
// );

const Component = ({ color = "#5e81ac", icon, primary, secondary }) => (
  <Stack direction="row" sx={{ flexGrow: 1, alignItems: "center" }}>
    <Avatar icon={icon} color={color} size={64} />
    <Stack>
      <Typography>{primary}</Typography>
      <Typography>{secondary}</Typography>
    </Stack>
  </Stack>
);

export default Component;
