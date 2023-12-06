import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import LinearProgress from '@mui/material/LinearProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { BoardgameList } from '../components/Lists/Boardgame';
import Toolbar from '../components/Toolbar';
import { isReady } from '../resources/util';
import { useDistinct } from '../hooks/useDistinct';
import Avatar from '../components/Avatar';
import { YearContext } from '../context';

const OldDistinctGames = ({ data: { old_distinct } }) => {
  const { year, yearFlag } = React.useContext(YearContext);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        { yearFlag && <Typography gutterBottom variant="h4">
          {old_distinct.length} previously played games without a play within {year}
        </Typography>}
        { !yearFlag && <Typography gutterBottom variant="h4">
          Please select a year using the filter
        </Typography>}
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {old_distinct.map((d, i) =>
                <BoardgameList key={i} {...d} />
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

const Component = () => {
  const { id } = useParams();
  const { loading, data } = useDistinct({ id });
  const ready = isReady([!loading, data !== null]);

  return (
    <Container title="Not Played" p={0} Toolbar={Toolbar}>
      {!ready && <LinearProgress />}
      {ready &&
        <Grid container>
          <Grid item md={2} p={2}>
            <Avatar data={data} />
          </Grid>
          <Grid item md={10} p={2}>
            <OldDistinctGames data={data} />
          </Grid>
        </Grid>}
    </Container>
  );
}

export default Component;
