import React from 'react';
import { YearContext } from '../context';

export const useFilter = (col, n) => {
  const { showAll } = React.useContext(YearContext);

  if (showAll) {
    return col
  } else {
    return col.slice(0, n)
  }
}
