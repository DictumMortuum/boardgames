import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

const Component = ({ url, name, info }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={url || "https://placehold.co/400/5e81ac/FFF"}
      />
      <CardHeader
        title={name}
        subheader={info}
      />
    </Card>
  )
}

export default Component;
