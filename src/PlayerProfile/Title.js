import * as React from 'react';
import Typography from '@mui/material/Typography';

const Component = props => {
  const { children, sx } = props;

  return (
    <Typography
      variant="h4"
      sx={{
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}

export default Component;
