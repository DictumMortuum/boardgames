import * as React from 'react';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Container from '../components/Container';
import { PlayersContext } from '../context';
import Typography from '@mui/material/Typography';
import SmallListItem from '../components/Lists/SmallListItem';
import Toolbar from '../components/Toolbar';
import { Link } from 'react-router-dom';

const PlayerLink = props => (
  <Link to={`/player/${props.id}`} style={{ textDecoration: 'none', color: "black" }}>
    {props.children}
  </Link>
)

const Component = () => {
  const { loading, data: { players } } = React.useContext(PlayersContext);

  return (
    <Container title="Player List" p={0} Toolbar={Toolbar}>
      {loading && <LinearProgress />}
      {!loading && <>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h4" p={2}>
              Players
            </Typography>
          </Grid>
          {players.map((d, i) =>
            <Grid key={i} item md={3} xs={12}>
              <PlayerLink {...d}>
                <SmallListItem url={d.url} info={d.count} name={d.name} />
              </PlayerLink>
            </Grid>
          )}
        </Grid>
      </>}
    </Container>
  );
}

export default Component;
