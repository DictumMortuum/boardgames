import React from 'react';
import Paper from '@mui/material/Paper';
import { Title } from 'react-admin';

const Component = props => {
  const { title, children, Toolbar } = props;

  return (
    <>
      <Toolbar />
      <Paper>
        <Title title={title} />
        <>
          {children}
        </>
      </Paper>
    </>
  );
}

export default Component;
