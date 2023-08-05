import * as React from 'react';
import Grid from '@mui/material/Grid';
import ElevatedPaper from '../util/ElevatedPaper';
import ImageCard from '../PlayerProfile/ImageCard';
import Request from '../util/Request';
import { YearContext } from '../context';

const state = {
  players: [],
}

const Component = props => {
  const {
    data: {
      players,
    },
  } = props;

  return (
    <Grid container component={ElevatedPaper} mt={20} p={2}>
      <Grid item xs={12} p={4}>
        <ImageCard name="Players" resource="player" data={players} />
      </Grid>
    </Grid>
  );
}

const Wrapper = () => {
  const { year, yearFlag } = React.useContext(YearContext);

  return (
    <Request
      request={`${process.env.REACT_APP_ENDPOINT}/player/all?year=${year}&year_flag=${yearFlag}`}
      initialState={state}
    >
      <Component />
    </Request>
  )
}

export default Wrapper;
