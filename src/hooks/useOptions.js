import React from 'react';
import { YearContext } from '../context';
import { fetchOptions } from '../resources/api';

export const useOptions = ({ num }) => {
  const { year, yearFlag } = React.useContext(YearContext);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    fetchOptions({ num, year, yearFlag })
    .then(
      rs => {
        setLoading(false);
        setData(rs);
      },
      err => {
        setLoading(false);
        setError(err);
      }
    )
  }, [num, year, yearFlag]);

  return {
    loading: loading,
    data,
    error,
  }
}
