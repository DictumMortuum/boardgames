import React from 'react';
import { Link } from "react-router-dom";
import { Menu } from 'react-admin';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
// import Avatar from '@mui/material/Avatar';

// const UserList = ({ player: { id, name, avatar } }) => {
//   return (
//     <List>
//       <ListItem disablePadding>
//         <ListItemButton component={Link} to={`/player/${id}`}>
//           <ListItemIcon>
//             <Avatar src={avatar} sx={{ width: 24, height: 24 }} />
//           </ListItemIcon>
//           <ListItemText primary={`${name}'s profile`} />
//         </ListItemButton>
//       </ListItem>
//     </List>
//   )
// }

const Component = () => {
  // const { data, loading } = React.useContext(PlayerContext);

  return (
    <Menu>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/playerlist">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Player List" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/boardgameslist">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Boardgames List" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      {/* <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/players">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Players" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/settings">
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider /> */}
      {/* {!loading && data !== null && <UserList {...data} />} */}
    </Menu>
  );
}

export default Component;
