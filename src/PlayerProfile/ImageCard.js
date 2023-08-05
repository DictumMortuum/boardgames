import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Title from './Title';
import Image from './Image';

const Item = ({ id, count, name, url, resource }) => (
  <Grid item xs={12} sm={3}>
    {resource === undefined
      ? <Image header={name} subheader={count} url={url} />
      : <Link to={`/${resource}/${id}`} style={{ textDecoration: 'none', color: "black" }}>
          <Image header={name} subheader={count} url={url} />
        </Link>
    }
  </Grid>
)

const Component = ({ name, data, resource }) => {
  return (
    <Grid container spacing={2} p={4}>
      <Grid item xs={12}>
        <Title>
          {name}
        </Title>
      </Grid>
      {data.map((d, i) => <Item key={i} resource={resource} {...d} />)}
    </Grid>
  )
}

export default Component;
