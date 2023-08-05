import React from 'react';
import { YearContext } from '../context';
import { Button, Toolbar, Typography, Checkbox } from '@mui/material';
import { ArrowRight, ArrowLeft } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Component = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { year, setYear, yearFlag, setYearFlag } = React.useContext(YearContext);
  const previous_year = year-1;
  const next_year = year+1;

  let justifyContent;
  if (matches) {
    justifyContent = "space-between";
  } else {
    justifyContent = "center";
  }

  return (
    <Toolbar sx={{ color: "white", justifyContent }}>
      {matches && <Typography
        variant="h5"
      >
        Απολογισμός επιτραπεζίων παιχνιδιών <span>{yearFlag ? year : ""}</span>
      </Typography>}
      <div>
        <Button
          color="inherit"
          disabled={!yearFlag}
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
          disabled={!yearFlag}
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
