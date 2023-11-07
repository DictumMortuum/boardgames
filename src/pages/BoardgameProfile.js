import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
// import Cards from '../components/Cards';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import LinearProgress from '@mui/material/LinearProgress';
import Boardgame from '../components/Lists/Boardgame';
// import ListItem from '../components/Lists/ListItem';
// import SmallListItem from '../components/Lists/SmallListItem';
import Toolbar from '../components/Toolbar';
import { useFilter } from '../hooks/useFilter';
import { useBoardgame } from '../hooks/useBoardgame';
import { isReady } from '../resources/util';

const BoardgameCard = ({ data: { boardgame: { name, url } } }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={url || "https://placehold.co/400/5e81ac/FFF"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          {name}
        </Typography>
      </CardContent>
    </Card>
  )
}

// const PlayerInfo = () => {
//   return (
//     <Grid container spacing={2}>
//       <Grid item md={9} xs={12}>
//         <Grid container spacing={2} >
//           <Grid item md={4} xs={12}>
//             <Cards.CollectionCard />
//           </Grid>
//           <Grid item md={4} xs={12}>
//             <Cards.WeightCard />
//           </Grid>
//           <Grid item md={4} xs={12}>
//             <Cards.RatingCard />
//           </Grid>
//         </Grid>
//       </Grid>
//       <Grid item md={3} xs={12}>
//         <Grid container spacing={2}>
//           <Grid item md={12} xs={12}>
//             <Cards.NetworkCard />
//           </Grid>
//         </Grid>
//       </Grid>
//       <Grid item md={6} xs={12} >
//         <Grid container spacing={2}>
//           <Grid item md={6} xs={12}>
//             <Cards.PlaysCard />
//           </Grid>
//           <Grid item md={6} xs={12}>
//             <Cards.WinrateCard />
//           </Grid>
//         </Grid>
//       </Grid>
//       <Grid item md={6} xs={12}>
//         <Grid container spacing={2}>
//           <Grid item md={6} xs={12}>
//             <Cards.CoopPlaysCard />
//           </Grid>
//           <Grid item md={6} xs={12}>
//             <Cards.CoopWinrateCard />
//           </Grid>
//         </Grid>
//       </Grid>
//       <Grid item md={12} xs={12}>
//         <Grid container spacing={2}>
//           <Grid item md={3} xs={12}>
//             <Cards.WinratePlayerCountCard id="3" />
//           </Grid>
//           <Grid item md={3} xs={12}>
//             <Cards.WinratePlayerCountCard id="4" />
//           </Grid>
//           <Grid item md={3} xs={12}>
//             <Cards.WinratePlayerCountCard id="5" />
//           </Grid>
//           <Grid item md={3} xs={12}>
//             <Cards.WinratePlayerCountCard id="6" aggregate />
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   )
// }

const LatestGames = ({ data: { latest = [], players } }) => {
  // const  = React.useContext(BoardgameContext);

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

// const Highscore = () => {
//   const { data: { scores } } = React.useContext(BoardgameContext);

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12}>
//         <Typography gutterBottom variant="h4">
//           Highscore
//         </Typography>
//       </Grid>
//       {scores.slice(0, 6).map((d, i) =>
//         <Grid key={i} item md={2} xs={12}>
//           <ListItem url={d.url} info={d.score} />
//         </Grid>
//       )}
//     </Grid>
//   )
// }

// const Network = () => {
//   const { data: { network, player } } = React.useContext(BoardgameContext);

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12}>
//         <Typography gutterBottom variant="h4">
//           Network
//         </Typography>
//       </Grid>
//       {network.filter(d => d.id !== player.id).slice(0, 12).map((d, i) =>
//         <Grid key={i} item md={2} xs={12}>
//           <SmallListItem url={d.url} info={d.count} name={d.name} />
//         </Grid>
//       )}
//     </Grid>
//   )
// }

// const Locations = () => {
//   const { data: { locations } } = React.useContext(BoardgameContext);

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12}>
//         <Typography gutterBottom variant="h4">
//           Locations
//         </Typography>
//       </Grid>
//       {locations.slice(0, 12).map((d, i) =>
//         <Grid key={i} item md={2} xs={12}>
//           <SmallListItem url={d.url} info={d.count} name={d.name} />
//         </Grid>
//       )}
//     </Grid>
//   )
// }

const Component = () => {
  const { id } = useParams();
  // const { loading: playersLoading } = React.useContext(PlayersContext);
  const { loading, data } = useBoardgame({ id, count: -1 });
  const ready = isReady([!loading]);

  return (
    <Container title="Boardgame Profile" p={0} Toolbar={Toolbar}>
      {!ready && <LinearProgress />}
      {ready &&
        <Grid container>
          <Grid item md={2} xs={12} p={2}>
            <BoardgameCard data={data} />
          </Grid>
          <Grid item md={10} xs={12} p={2}>
            {/* <PlayerInfo /> */}
          </Grid>
          <Grid item md={12} p={2}>
            <LatestGames data={data} />
          </Grid>
          {/* <Grid item md={12} p={2}>
            <Highscore />
          </Grid>
          <Grid item md={12} p={2}>
            <Network />
          </Grid>
          <Grid item md={12} p={2}>
            <Locations />
          </Grid> */}
        </Grid>}
    </Container>
  );
}

export default Component;
