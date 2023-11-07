import React, { createContext } from 'react';

export const YearContext = createContext('year');
export const PlayerContext = createContext('player');
export const PlayersContext = createContext('players');

export const YearProvider = ({ children }) => {
  const d = new Date();
  const [year, setYear] = React.useState(d.getFullYear());
  const [yearFlag, setYearFlag] = React.useState(true);
  const [showAll, setShowAll] = React.useState(false);
  const [playermap, setPlayers] = React.useState(new Map());

  const updatePlayers = (key, value) => {
    setPlayers(map => new Map(map.set(key, value)));
  }

  return (
    <YearContext.Provider value={{ year, setYear, yearFlag, setYearFlag, showAll, setShowAll, playermap, updatePlayers }}>
      {children}
    </YearContext.Provider>
  )
}
