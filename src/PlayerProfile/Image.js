import * as React from 'react';
import Icon from './Icon';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CountBadge from './CountBadge';

const Component = ({ url, header, subheader, size = 180 })=> {
  return (
    <Stack alignItems="center" gap={2}>
      <CountBadge count={subheader}>
        <Icon url={url} name={header} size={size} />
      </CountBadge>
      <Typography align="center" variant="h5">
        {header}
      </Typography>
    </Stack>
  );
}

export default Component;
