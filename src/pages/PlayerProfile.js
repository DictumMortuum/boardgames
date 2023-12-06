import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import Cards from '../components/Cards';
import LinearProgress from '@mui/material/LinearProgress';
import Boardgame from '../components/Lists/Boardgame';
import ListItem from '../components/Lists/ListItem';
import SmallListItem from '../components/Lists/SmallListItem';
import Toolbar from '../components/Toolbar';
import Avatar from '../components/Avatar';
import { useFilter } from '../hooks/useFilter';
import { usePlayers } from '../hooks/usePlayers';
import { isReady } from '../resources/util';

const PlayerInfo = ({ data }) => {
  return (
    <Grid container spacing={2}>
      <Grid item md={9} xs={12}>
        <Grid container spacing={2} >
          <Grid item md={4} xs={12}>
            <Cards.CollectionCard data={data} />
          </Grid>
          <Grid item md={4} xs={12}>
            <Cards.WeightCard data={data} />
          </Grid>
          <Grid item md={4} xs={12}>
            <Cards.RatingCard data={data} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={3} xs={12}>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <Cards.NetworkCard data={data} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} xs={12} >
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Cards.PlaysCard data={data} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Cards.WinrateCard data={data} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} xs={12}>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Cards.CoopPlaysCard data={data} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Cards.CoopWinrateCard data={data} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={12} xs={12}>
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <Cards.WinratePlayerCountCard id="3" data={data} />
          </Grid>
          <Grid item md={3} xs={12}>
            <Cards.WinratePlayerCountCard id="4" data={data} />
          </Grid>
          <Grid item md={3} xs={12}>
            <Cards.WinratePlayerCountCard id="5" data={data} />
          </Grid>
          <Grid item md={3} xs={12}>
            <Cards.WinratePlayerCountCard id="6" aggregate data={data} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

const LatestGames = ({ data: { latest, players } }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Latest Games
        </Typography>
      </Grid>
      {useFilter(latest, 6).map((d, i) =>
        <Grid key={i} item md={2} xs={12}>
          <Boardgame {...d} roster={players} />
        </Grid>
      )}
    </Grid>
  )
}

const Highscore = ({ data: { scores } }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Highscore
        </Typography>
      </Grid>
      {useFilter(scores, 6).map((d, i) =>
        <Grid key={i} item md={2} xs={12}>
          <ListItem url={d.url} info={d.score} />
        </Grid>
      )}
    </Grid>
  )
}

const BestGames = ({ data: { best_games } }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Best Games
        </Typography>
      </Grid>
      {useFilter(best_games, 6).map((d, i) =>
        <Grid key={i} item md={2} xs={12}>
          <ListItem url={d.url} info={d.count} />
        </Grid>
      )}
    </Grid>
  )
}

const MostPlayed = ({ data: { played } }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Most Played
        </Typography>
      </Grid>
      {useFilter(played, 6).map((d, i) =>
        <Grid key={i} item md={2} xs={12}>
          <ListItem url={d.url} info={d.count} />
        </Grid>
      )}
    </Grid>
  )
}

const Subdomains = ({ data: { subdomains } }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Subdomains
        </Typography>
      </Grid>
      {useFilter(subdomains, 12).map((d, i) =>
        <Grid key={i} item md={2} xs={12}>
          <SmallListItem url={d.url} info={d.count} name={d.name} />
        </Grid>
      )}
    </Grid>
  )
}

const Mechanics = ({ data: { mechanics } }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Mechanics
        </Typography>
      </Grid>
      {useFilter(mechanics, 12).map((d, i) =>
        <Grid key={i} item md={2} xs={12}>
          <SmallListItem url={d.url} info={d.count} name={d.name} />
        </Grid>
      )}
    </Grid>
  )
}


const Categories = ({ data: { categories } }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Categories
        </Typography>
      </Grid>
      {useFilter(categories, 12).map((d, i) =>
        <Grid key={i} item md={2} xs={12}>
          <SmallListItem url={d.url} info={d.count} name={d.name} />
        </Grid>
      )}
    </Grid>
  )
}

const Network = ({ data: { network, player } }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Network
        </Typography>
      </Grid>
      {useFilter(network.filter(d => d.id !== player.id), 12).map((d, i) =>
        <Grid key={i} item md={2} xs={12}>
          <SmallListItem url={d.url} info={d.count} name={d.name} />
        </Grid>
      )}
    </Grid>
  )
}

const Locations = ({ data: { locations } }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Locations
        </Typography>
      </Grid>
      {useFilter(locations, 12).map((d, i) =>
        <Grid key={i} item md={2} xs={12}>
          <SmallListItem url={d.url} info={d.count} name={d.name} />
        </Grid>
      )}
    </Grid>
  )
}

const Designers = ({ data: { designers } }) => {
  return (
    <Grid container spacing={2} Toolbar={Toolbar}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Designers
        </Typography>
      </Grid>
      {useFilter(designers, 12).map((d, i) =>
        <Grid key={i} item md={2} xs={12}>
          <SmallListItem url={d.url} info={d.count} name={d.name} />
        </Grid>
      )}
    </Grid>
  )
}

const Component = () => {
  const { id } = useParams();
  const { loading, data } = usePlayers({ id, count: 12 });
  const ready = isReady([!loading, data !== null]);

  return (
    <Container title="Profile" p={0} Toolbar={Toolbar}>
      {!ready && <LinearProgress />}
      {ready &&
        <Grid container>
          <Grid item md={2} xs={12} p={2}>
            <Avatar data={data} />
          </Grid>
          <Grid item md={10} xs={12} p={2}>
            <PlayerInfo data={data} />
          </Grid>
          <Grid item md={12} p={2}>
            <LatestGames data={data} />
          </Grid>
          <Grid item md={12} p={2}>
            <BestGames data={data} />
          </Grid>
          <Grid item md={12} p={2}>
            <Highscore data={data} />
          </Grid>
          <Grid item md={12} p={2}>
            <MostPlayed data={data} />
          </Grid>
          <Grid item md={12} p={2}>
            <Network data={data} />
          </Grid>
          <Grid item md={12} p={2}>
            <Locations data={data} />
          </Grid>
          <Grid item md={12} p={2}>
            <Designers data={data} />
          </Grid>
          <Grid item md={12} p={2}>
            <Subdomains data={data} />
          </Grid>
          <Grid item md={12} p={2}>
            <Mechanics data={data} />
          </Grid>
          <Grid item md={12} p={2}>
            <Categories data={data} />
          </Grid>
        </Grid>}
    </Container>
  );
}

export default Component;
