import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Icon from '../Icon';
import { defaultName } from '../../resources/util';

const Component = ({ info, url, name = "" }) => {
  return (
    <Card >
      <CardHeader
        avatar={
          <Icon
            url={url}
            name={name}
            variant="square"
          >
            {defaultName(name)
          }</Icon>
        }
        title={name}
        subheader={info}
      />
    </Card>
  )
}

export default Component;
