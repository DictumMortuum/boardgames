import * as React from 'react';
import Icon from './Icon';
import Grid from '@mui/material/Grid';
import ImageCard from './ImageCard';
import Stats from './Stats';
import Typography from '@mui/material/Typography';
import Request from '../util/Request';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import LinearProgress from '@mui/material/LinearProgress';
import ElevatedPaper from '../util/ElevatedPaper';
import { YearContext } from '../context';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const state = {
  games: 0,
  matches: 0,
  player: {
    name: "",
    avatar: "",
  },
  mechanics: [],
  played: [],
  network: [],
  network_length: 0,
  categories: [],
  designers: [],
  subdomains: [],
  locations: [],
  weight: 0,
  average: 0,
  cooperative: 0,
  cooperative_per: 0,
  plays_won: 0,
}

const PlayerImage = ({ avatar, name, surname })=> {
  const [isHover, setIsHover] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

 const style = {
    position: 'absolute',
    left: '50%',
    transform: isHover ? 'translate(-50%, -70%)' : 'translate(-50%, -55%)',
    transition: 'all .15s ease',
  }

  return (
    <Icon
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      name={name + " " + surname}
      url={avatar}
      sx={style}
    />
  );
}

const TabPanel = props => {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index}>
      {value === index && children}
    </div>
  )
}

const Component = props => {
  const {
    data: {
      player: {
        avatar,
        name,
        surname
      },
      subdomains,
      mechanics,
      network,
      network_length,
      games,
      matches,
      categories,
      locations,
      designers,
      played,
      weight,
      average,
      cooperative,
      cooperative_per,
      plays_won,
    },
    isLoaded
  } = props;

  const [value, setValue] = React.useState('0');
  const theme = useTheme();
  const flag = useMediaQuery(theme.breakpoints.up('sm'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container component={ElevatedPaper} mt={20} p={2}>
      <Grid item xs={12}>
        <PlayerImage avatar={avatar} name={name} surname={surname} />
      </Grid>
      {!flag && <Grid item xs={12} sm={0} p={5} />}
      <Grid item xs={12} sm={4} sx={{ textAlign: "center" }} p={4}>
        <Stats
          stats={[{
            name: "Games",
            count: games,
          }, {
            name: "Matches",
            count: matches,
          }, {
            name: "Wins",
            count: plays_won,
          }, {
            name: "Coop Success",
            count: `${cooperative == 0 ? "N/A" : (cooperative_per * 100).toFixed(2) + "%"}`
          }]}
          justifyContent="space-evenly"
        />
      </Grid>
      <Grid item xs={0} sm={4} />
      <Grid item xs={12} sm={4} sx={{ textAlign: "center" }} p={4}>
        <Stats
          stats={[{
            name: "Weight",
            count: weight.toFixed(2),
          }, {
            name: "Average",
            count: average.toFixed(2),
          }, {
            name: "Network",
            count: network_length,
          }]}
          justifyContent="space-evenly"
        />
      </Grid>
      <Grid item xs={12} mt={2}>
        <Typography variant="h4" align="center">
          {name} {surname}
        </Typography>
      </Grid>
      <Grid item xs={12} p={4}>
        <Box>
          <Box sx={{ height: 5 }}>
            {!isLoaded && <LinearProgress />}
          </Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="lab API tabs example"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab label="Played" value="0" />
            <Tab label="Subdomains" value="1" />
            <Tab label="Mechanics" value="2" />
            <Tab label="Categories" value="3" />
            <Tab label="Network" value="4" />
            <Tab label="Locations" value="5" />
            <Tab label="Designers" value="6" />
          </Tabs>
        </Box>

        <TabPanel value={value} index="0">
          <ImageCard name="Played" data={played} />
        </TabPanel>
        <TabPanel value={value} index="1">
          <ImageCard name="Subdomains" data={subdomains} />
        </TabPanel>
        <TabPanel value={value} index="2">
          <ImageCard name="Mechanics" data={mechanics} />
        </TabPanel>
        <TabPanel value={value} index="3">
          <ImageCard name="Categories" data={categories} />
        </TabPanel>
        <TabPanel value={value} index="4">
          <ImageCard name="Network" resource="player" data={network} />
        </TabPanel>
        <TabPanel value={value} index="5">
          <ImageCard name="Locations" data={locations} />
        </TabPanel>
        <TabPanel value={value} index="6">
          <ImageCard name="Designers" data={designers} />
        </TabPanel>
      </Grid>
    </Grid>
  );
}

const Wrapper = () => {
  const params = useParams();
  const { id } = params;
  const { year, yearFlag } = React.useContext(YearContext);

  return (
    <Request
      request={`${process.env.REACT_APP_ENDPOINT}/player/${id}?year=${year}&year_flag=${yearFlag}`}
      initialState={state}
    >
      <Component />
    </Request>
  )
}

export default Wrapper;
