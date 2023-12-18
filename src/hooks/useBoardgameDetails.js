import React from 'react';
import { fetchBoardgameDetails } from '../resources/api';

export const useBoardgameDetails = ({ id }) => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    fetchBoardgameDetails({ id })
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
  }, [id]);

  return {
    loading: loading,
    data,
    error,
  }
}
