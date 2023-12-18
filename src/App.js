import React from 'react';
import { Route, HashRouter as Router } from "react-router-dom";
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
// import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import Layout from './Bar';
// import authProvider from './authProvider';
import themeProvider from './themeProvider';
import simpleRestProvider from 'ra-data-simple-rest';
// import dataProvider from './dataProvider';
// import Login from './components/Login';
import {
  YearProvider,
} from './context';
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  CustomRoutes,
  Layout
} from 'react-admin';
import { PlayList, PlayCreate, PlayEdit } from './resources/plays';
import Dashboard from './pages/Dashboard';
import Menu from './components/Menu';
import Players from './pages/Players';
import PlayerProfile from './pages/PlayerProfile';
import PlayerDistinct from './pages/PlayerDistinct';
import PlayerOld from './pages/PlayerOld';
import Boardgames from './pages/Boardgames';
import BoardgameProfile from './pages/BoardgameProfile';
import Review from './pages/Review';

const App = () => {
  return (
      <Router>
        <YearProvider>
          <Admin
            theme={themeProvider}
            layout={props => <Layout {...props} menu={Menu} />}
            dataProvider={simpleRestProvider(process.env.REACT_APP_ENDPOINT)}
            dashboard={Players}
          >
            <Resource name="players" list={ListGuesser} edit={EditGuesser} recordRepresentation={(record) => `${record.name} ${record.surname}`} />
            <Resource name="plays" list={PlayList} edit={PlayEdit} create={PlayCreate} />
            <Resource name="stats" />
            <Resource name="locations" />
            <Resource name="boardgames" />
            <CustomRoutes>
              <Route path="/playerlist" element={<Players />} />
              <Route path="/settings" element={<Dashboard />} />
              <Route path="/player/:id" element={<PlayerProfile />} />
              <Route path="/player/:id/distinct" element={<PlayerDistinct />} />
              <Route path="/player/:id/old" element={<PlayerOld />} />
              <Route path="/boardgameslist" element={<Boardgames />} />
              <Route path="/boardgame/:id" element={<BoardgameProfile />} />
              <Route path="/review/:id" element={<Review />} />
            </CustomRoutes>
          </Admin>
        </YearProvider>
      </Router>
  );
}

export default App;
