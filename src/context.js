import React, { createContext, useContext, useState, useEffect } from 'react';

export const YearContext = createContext('year');
export const PlayerContext = createContext('player');
export const PlayersContext = createContext('players');

export const YearProvider = ({ children }) => {
  const d = new Date();
  const [year, setYear] = React.useState(d.getFullYear());
  const [yearFlag, setYearFlag] = React.useState(true);

  return (
    <YearContext.Provider value={{ year, setYear, yearFlag, setYearFlag }}>
      {children}
    </YearContext.Provider>
  )
}

export const PlayerProvider = ({ children }) => {
  const { year, yearFlag } = useContext(YearContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    if (id !== null) {
      setLoading(true);
      fetch(`${process.env.REACT_APP_PLAYER_ENDPOINT}/player/${id}?year=${year}&year_flag=${yearFlag}`)
      .then(res => res.json())
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
    }
  // eslint-disable-next-line
  }, [id, year, yearFlag]);

  const isConsistent = id => {
    if (data == null || loading) {
      return false
    } else {
      return data.player.id === parseInt(id)
    }
  }

  return (
    <PlayerContext.Provider value={{ data, loading, error, setId, setLoading, setData, isConsistent }}>
      {children}
    </PlayerContext.Provider>
  )
}

export const PlayersProvider = ({ children }) => {
  const { year, yearFlag } = useContext(YearContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_PLAYER_ENDPOINT}/player/all?year=${year}&year_flag=${yearFlag}`)
    .then(res => res.json())
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
  // eslint-disable-next-line
  }, [year, yearFlag]);

  return (
    <PlayersContext.Provider value={{ data, loading, error }}>
      {children}
    </PlayersContext.Provider>
  )
}
