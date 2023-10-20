import React from "react";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';

const Component = ({ children, color })=> (
  <>
    <Paper p={4} sx={{ backgroundColor: `${color}30` }} component={Box}>
      {children}
    </Paper>
  </>
);

export default Component;
