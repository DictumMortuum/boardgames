import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '../components/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { ReviewBoardgameList } from '../components/Lists/Boardgame';
import Toolbar from '../components/Toolbar';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const best = {
  "2023": [{
    id: 383179,
    category: "Game of the year"
  }, {
    id: 396790,
    category: "Second place"
  }, {
    id: 337627,
    category: "Third place"
  }]
}

const d = {
  "2023": [{
    id: 337627,
    category: "The ultimate setup"
  }, {
    id: 396790,
    category: "Analysis paralysis"
  }, {
    id: 163068,
    category: "Analysis paralysis"
  }, {
    id: 284742,
    category: "The smokin' token"
  }, {
    id: 366013,
    category: "I'm not angry, I'm happiness challenged"
  }, {
    id: 167791,
    category: "The vegas showdown"
  }, {
    id: 355093,
    category: "The snooze shmooze"
  }, {
    id: 321608,
    category: "The mensa select"
  }, {
    id: 355093,
    category: "Misery loves company"
  }, {
    id: 315610,
    category: "Trashier than trash"
  }, {
    id: 383179,
    category: "Chess exists you know"
  }, {
    id: 173346,
    category: "Double trouble"
  }, {
    id: 178900,
    category: "The more the merrier"
  }, {
    id: 382350,
    category: "This is not another cash grab"
  }]
}

const DistinctGames = ({ data }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              {data.map((d, i) =>
                <ReviewBoardgameList key={i} {...d} />
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
  const data = d[id];
  const best_data = best[id];
  const flag = data === undefined || best_data === undefined

  return (
    <Container title={`${id} boardgame review`} p={0} Toolbar={Toolbar}>
      <Grid container>
        {flag && <Typography variant="h4">No data for this year</Typography>}
        {!flag && <>
        <Grid item md={12} p={2}>
          <Typography gutterBottom variant="h4">
            Top 3
          </Typography>
          <DistinctGames data={best_data} />
        </Grid>
        <Grid item md={12} p={2}>
          <Typography gutterBottom variant="h4">
            Questionnaire Categories
          </Typography>
          <DistinctGames data={data} />
        </Grid>
        </>}
      </Grid>
    </Container>
  );
}

export default Component;
