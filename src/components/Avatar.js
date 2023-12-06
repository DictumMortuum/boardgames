import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";

const Component = ({ data: { player: { id, name, surname, avatar } } }) => {
  return (
    <Stack>
      <Card>
        <CardMedia
          component="img"
          image={avatar || "https://placehold.co/400/5e81ac/FFF"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign="center">
            {name + " " + surname}
          </Typography>
        </CardContent>
      </Card>
      <List>
      <ListItem disablePadding>
          <ListItemButton component={Link} to={`/player/${id}`} >
            <ListItemText primary="Profile"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to={`/player/${id}/distinct`} >
            <ListItemText primary="Distinct Games"/>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to={`/player/${id}/old`}>
            <ListItemText primary="Not played" />
          </ListItemButton>
        </ListItem>
      </List>
    </Stack>
  )
}

export default Component;
