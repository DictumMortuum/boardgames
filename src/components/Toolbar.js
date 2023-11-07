import React from 'react';
import { YearContext } from '../context';
import {
  Button,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import { ArrowRight, ArrowLeft } from '@mui/icons-material';
import { TopToolbar } from 'react-admin';

const Component = () => {
  const { year, setYear, yearFlag, setYearFlag, loading, showAll, setShowAll } = React.useContext(YearContext);
  const previous_year = year-1;
  const next_year = year+1;

  return (
    <TopToolbar>
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
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            checked={showAll}
            onChange={(event) => setShowAll(event.target.checked)}
          />
        }
        label="Show all"
      />
    </TopToolbar>
  )
}

export default Component;
