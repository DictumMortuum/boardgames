import * as React from 'react';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Container from '../components/Container';
import Typography from '@mui/material/Typography';
import SmallListItem from '../components/Lists/SmallListItem';
import Toolbar from '../components/Toolbar';
import { BoardgameLink } from '../components/links';
import { useBoardgame } from '../hooks/useBoardgame';

const Component = () => {
  const { loading, data } = useBoardgame({ id: "all", count: -1 });

  return (
    <Container title="Boardgames List" p={0} Toolbar={Toolbar}>
      {loading && <LinearProgress />}
      {!loading && <>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h4" p={2}>
              Boardgames
            </Typography>
          </Grid>
          {data.played.map((d, i) =>
            <Grid key={i} item md={3} xs={12}>
              <BoardgameLink {...d}>
                <SmallListItem url={d.url} info={d.count} name={d.name} />
              </BoardgameLink>
            </Grid>
          )}
        </Grid>
      </>}
    </Container>
  );
}

export default Component;
