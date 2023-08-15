import React from 'react';
import PlayerProfile from './PlayerProfile';
import Players from './Players';
import AppBar from './AppBar';
import Container from '@mui/material/Container';
import { YearContext } from './context';
import { Routes, Route } from 'react-router-dom';

function App() {
  const d = new Date();
  const [year, setYear] = React.useState(d.getFullYear());
  const [yearFlag, setYearFlag] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="App">
      <YearContext.Provider value={{ year, setYear, yearFlag, setYearFlag, loading, setLoading }}>
        <AppBar />
        <Container sx={{ height: "100vh" }} maxWidth="xl">
          <Routes>
            <Route path="/">
              <Route path="/" element={<Players />} />
              <Route path="/players" element={<Players />} />
              <Route path="/player/:id" element={<PlayerProfile />} />
            </Route>
          </Routes>
        </Container>
      </YearContext.Provider>
    </div>
  );
}

export default App;
