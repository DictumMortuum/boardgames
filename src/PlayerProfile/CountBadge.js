import * as React from 'react';
import Badge from '@mui/material/Badge';

const Component = ({ count, children })=> {
  return (
    <Badge
      badgeContent={count}
      max={999}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      {children}
    </Badge>
  );
}

export default Component;
