import * as React from 'react';
import Icon from './Icon';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Badge } from '@mui/material';

const Component = ({ url, header, subheader })=> {
  return (
    <Stack alignItems="center" gap={2}>
      <Badge
        badgeContent={subheader}
        max={999}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Icon url={url} name={header} />
      </Badge>
      <Typography align="center" variant="h5">
        {header}
      </Typography>
    </Stack>
  );
}

export default Component;
