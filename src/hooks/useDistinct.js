import React from 'react';
import { YearContext } from '../context';
import { fetchDistinct } from '../resources/api';

export const useDistinct = ({ id }) => {
  const { year, yearFlag } = React.useContext(YearContext);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    fetchDistinct({ id, year, yearFlag })
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
  }, [id, year, yearFlag]);

  return {
    loading: loading,
    data,
    error,
  }
}
