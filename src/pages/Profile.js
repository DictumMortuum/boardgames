import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { PlayerContext } from '../context';
import Container from '../components/Container';
import Cards from '../components/Cards';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import LinearProgress from '@mui/material/LinearProgress';
import Boardgame from '../components/Lists/Boardgame';
import ListItem from '../components/Lists/ListItem';
import SmallListItem from '../components/Lists/SmallListItem';
import Toolbar from '../components/Toolbar';

const PlayerCard = () => {
  const { data: { player: { name, surname, avatar } } } = React.useContext(PlayerContext);

  return (
    <Card>
      <CardMedia
        component="img"
        image={avatar || "https://placehold.co/400/5e81ac/FFF"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          {name + " " + surname}
        </Typography>
      </CardContent>
    </Card>
  )
}

const PlayerInfo = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={9} xs={12}>
        <Grid container spacing={2} >
          <Grid item md={4} xs={12}>
            <Cards.CollectionCard />
          </Grid>
          <Grid item md={4} xs={12}>
            <Cards.WeightCard />
          </Grid>
          <Grid item md={4} xs={12}>
            <Cards.RatingCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={3} xs={12}>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <Cards.NetworkCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} xs={12} >
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Cards.PlaysCard />
          </Grid>
          <Grid item md={6} xs={12}>
            <Cards.WinrateCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} xs={12}>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Cards.CoopPlaysCard />
          </Grid>
          <Grid item md={6} xs={12}>
            <Cards.CoopWinrateCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={12} xs={12}>
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <Cards.WinratePlayerCountCard id="3" />
          </Grid>
          <Grid item md={3} xs={12}>
            <Cards.WinratePlayerCountCard id="4" />
          </Grid>
          <Grid item md={3} xs={12}>
            <Cards.WinratePlayerCountCard id="5" />
          </Grid>
          <Grid item md={3} xs={12}>
            <Cards.WinratePlayerCountCard id="6" aggregate />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

const LatestGames = () => {
  const { data: { latest } } = React.useContext(PlayerContext);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Latest Games
        </Typography>
      </Grid>
      {latest.slice(0, 6).map((d, i) =>
        <Grid key={i} item md={2} xs={12}>
          <Boardgame {...d} />
        </Grid>
      )}
    </Grid>
  )
}

const Highscore = () => {
  const { data: { scores } } = React.useContext(PlayerContext);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Highscore
        </Typography>
      </Grid>
      {scores.slice(0, 6).map((d, i) =>
        <Grid key={i} item md={2} xs={12}>
          <ListItem url={d.url} info={d.score} />
        </Grid>
      )}
    </Grid>
  )
}

const BestGames = () => {
  const { data: { best_games } } = React.useContext(PlayerContext);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Best Games
        </Typography>
      </Grid>
      {best_games.slice(0, 6).map((d, i) =>
        <Grid key={i} item md={2} xs={12}>
          <ListItem url={d.url} info={d.count} />
        </Grid>
      )}
    </Grid>
  )
}

const MostPlayed = () => {
  const { data: { played } } = React.useContext(PlayerContext);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Most Played
        </Typography>
      </Grid>
      {played.slice(0, 6).map((d, i) =>
        <Grid key={i} item md={2} xs={12}>
          <ListItem url={d.url} info={d.count} />
        </Grid>
      )}
    </Grid>
  )
}

const Subdomains = () => {
  const { data: { subdomains } } = React.useContext(PlayerContext);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Subdomains
        </Typography>
      </Grid>
      {subdomains.slice(0, 12).map((d, i) =>
        <Grid key={i} item md={2} xs={12}>
          <SmallListItem url={d.url} info={d.count} name={d.name} />
        </Grid>
      )}
    </Grid>
  )
}

const Mechanics = () => {
  const { data: { mechanics } } = React.useContext(PlayerContext);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Mechanics
        </Typography>
      </Grid>
      {mechanics.slice(0, 12).map((d, i) =>
        <Grid key={i} item md={2} xs={12}>
          <SmallListItem url={d.url} info={d.count} name={d.name} />
        </Grid>
      )}
    </Grid>
  )
}


const Categories = () => {
  const { data: { categories } } = React.useContext(PlayerContext);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Categories
        </Typography>
      </Grid>
      {categories.slice(0, 12).map((d, i) =>
        <Grid key={i} item md={2} xs={12}>
          <SmallListItem url={d.url} info={d.count} name={d.name} />
        </Grid>
      )}
    </Grid>
  )
}

const Network = () => {
  const { data: { network, player } } = React.useContext(PlayerContext);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Network
        </Typography>
      </Grid>
      {network.filter(d => d.id !== player.id).slice(0, 12).map((d, i) =>
        <Grid key={i} item md={2} xs={12}>
          <SmallListItem url={d.url} info={d.count} name={d.name} />
        </Grid>
      )}
    </Grid>
  )
}

const Locations = () => {
  const { data: { locations } } = React.useContext(PlayerContext);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Locations
        </Typography>
      </Grid>
      {locations.slice(0, 12).map((d, i) =>
        <Grid key={i} item md={2} xs={12}>
          <SmallListItem url={d.url} info={d.count} name={d.name} />
        </Grid>
      )}
    </Grid>
  )
}

const Designers = () => {
  const { data: { designers } } = React.useContext(PlayerContext);

  return (
    <Grid container spacing={2} Toolbar={Toolbar}>
      <Grid item xs={12}>
        <Typography gutterBottom variant="h4">
          Designers
        </Typography>
      </Grid>
      {designers.slice(0, 12).map((d, i) =>
        <Grid key={i} item md={2} xs={12}>
          <SmallListItem url={d.url} info={d.count} name={d.name} />
        </Grid>
      )}
    </Grid>
  )
}

const Component = () => {
  const { setId, isConsistent } = React.useContext(PlayerContext);
  const { id } = useParams();

  React.useEffect(() => {
    setId(id);
  // eslint-disable-next-line
  }, [id]);

  return (
    <Container title="Profile" p={0} Toolbar={Toolbar}>
      {!isConsistent(id) && <LinearProgress />}
      {isConsistent(id) &&
        <Grid container>
          <Grid item md={2} xs={12} p={2}>
            <PlayerCard />
          </Grid>
          <Grid item md={10} xs={12} p={2}>
            <PlayerInfo />
          </Grid>
          <Grid item md={12} p={2}>
            <LatestGames />
          </Grid>
          <Grid item md={12} p={2}>
            <BestGames />
          </Grid>
          <Grid item md={12} p={2}>
            <Highscore />
          </Grid>
          <Grid item md={12} p={2}>
            <MostPlayed />
          </Grid>
          <Grid item md={12} p={2}>
            <Network />
          </Grid>
          <Grid item md={12} p={2}>
            <Locations />
          </Grid>
          <Grid item md={12} p={2}>
            <Designers />
          </Grid>
          <Grid item md={12} p={2}>
            <Subdomains />
          </Grid>
          <Grid item md={12} p={2}>
            <Mechanics />
          </Grid>
          <Grid item md={12} p={2}>
            <Categories />
          </Grid>
        </Grid>}
    </Container>
  );
}

export default Component;
