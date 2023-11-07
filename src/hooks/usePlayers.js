import React from 'react';
import { YearContext } from '../context';
import { fetchPlayer } from '../resources/api';

export const usePlayers = ({ id, count }) => {
  const { year, yearFlag } = React.useContext(YearContext);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    fetchPlayer({ id, year, yearFlag, count })
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
  }, [id, year, yearFlag, count]);

  return {
    loading: loading,
    data,
    error,
  }
}
