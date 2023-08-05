import * as React from 'react';
import Grid from '@mui/material/Grid';
import YearSelect from '../util/YearSelect';

const Component = () => {
  return (
    <Grid container gap={2}>
      {/* <Grid item xs={4}>
        <Button variant="contained" size="medium">Upload Avatar</Button>
      </Grid> */}
      <Grid item xs={4}>
        <YearSelect />
      </Grid>
    </Grid>
  );
}

export default Component;
