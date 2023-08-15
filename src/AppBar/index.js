import React from 'react';
import { YearContext } from '../context';
import { Button, Toolbar, Checkbox } from '@mui/material';
import { ArrowRight, ArrowLeft } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Component = () => {
  const { year, setYear, yearFlag, setYearFlag, loading } = React.useContext(YearContext);
  const previous_year = year-1;
  const next_year = year+1;

  return (
    <Toolbar sx={{ color: "white", justifyContent: "space-between" }}>
      <Link to="/">
        <IconButton sx={{ color: "white" }}>
          <HomeIcon />
        </IconButton>
      </Link>
      <div>
        <Button
          color="inherit"
          disabled={!yearFlag || loading}
          onClick={() => setYear(previous_year)}
          startIcon={<ArrowLeft />}
        >
          {previous_year}
        </Button>
        <Checkbox
          size="small"
          checked={yearFlag}
          onChange={(event) => setYearFlag(event.target.checked)}
        />
        <Button
          color="inherit"
          disabled={!yearFlag || loading}
          onClick={() => setYear(next_year)}
          endIcon={<ArrowRight />}
        >
          {next_year}
        </Button>
      </div>
    </Toolbar>
  )
}

export default Component;
