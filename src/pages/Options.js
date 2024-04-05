import * as React from 'react';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Container from '../components/Container';
import Typography from '@mui/material/Typography';
import SmallListItem from '../components/Lists/SmallListItem';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Toolbar from '../components/Toolbar';
import { BoardgameLink } from '../components/links';
import { useOptions } from '../hooks/useOptions';

const SelectNum = ({ num, setNum }) => {
  const handleChange = (event) => {
    setNum(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Player #</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={num}
        label="Player #"
        onChange={handleChange}
      >
        {[1,2,3,4,5,6,7,8].map(d => <MenuItem value={d}>{d}</MenuItem>)}
      </Select>
    </FormControl>
  );
}

const Component = () => {
  const [num, setNum] = React.useState(4);
  const { loading, data } = useOptions({ num });

  return (
    <Container title="Options List" p={0} Toolbar={Toolbar}>
      {loading && <LinearProgress />}
      {!loading && <>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h4" p={2}>
              Options
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <SelectNum num={num} setNum={setNum} />
          </Grid>
          {data.options.map((d, i) =>
            <Grid key={i} item md={3} xs={12}>
              <BoardgameLink {...d}>
                <SmallListItem url={d.url} info={
                  <Typography>Best: {d.best_min_players}-{d.best_max_players} players</Typography>
                } name={d.name} />
              </BoardgameLink>
            </Grid>
          )}
        </Grid>
      </>}
    </Container>
  );
}

export default Component;
