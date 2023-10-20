import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from "@mui/material";
import { Title } from 'react-admin';

const Dashboard = () => (
  <Card>
    <Title title="Home" />
    <CardContent>
      <Grid container>
        <Grid md={12} xs={12}>

        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default Dashboard;
