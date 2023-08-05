import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Component = ({ stats, justifyContent }) => {
  return (
    <Grid container spacing={2} justifyContent={justifyContent}>
      {stats.map(({ name, count }, i) => (
        <Grid item key={i}>
          <Typography variant="h6">
            {count}
          </Typography>
          <Typography>
            {name}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default Component;
