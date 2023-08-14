import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import {ReactComponent as VarietyIcon} from './variety-icon-13.svg';
import {
  GiBloodySword,
  GiMeeple,
  GiDominoTiles,
  GiCardPick,
  GiCardRandom,
  GiCardPlay,
  GiBattleTank,
  GiAbstract047,
  GiPartyPopper,
  GiPalette,
  GiRollingDices,
  GiReceiveMoney,
  GiHexes,
  GiCardExchange,
  GiMightyForce,
  GiBanknote,
  GiCardAceSpades,
  GiModernCity,
  GiBoxingGlove,
  GiMedievalGate,
  GiElfEar,
  GiAncientColumns,
  GiAncientRuins,
  GiMinions,
  GiBookmarklet,
  GiFarmTractor,
  GiAxeSword,
  GiPublicSpeaker,
  GiMonaLisa,
  GiClover,
  GiBrain,
  GiDiscussion,
  GiMagnifyingGlass,
  GiSpy,
  GiPodiumWinner,
  GiHouseKeys,
  GiChurch,
  GiStarsStack,
  GiWesternHat,
  GiCardDraw,
  GiPuzzle,
  GiMonsterGrasp,
  GiVote,
  GiFingersCrossed,
  GiLaddersPlatform,
  GiChalkOutlineMurder,
} from 'react-icons/gi';
import {
  FaChessBoard,
  FaReact,
  FaDog,
  FaPuzzlePiece,
  FaIndustry,
  FaTrain,
  FaHandshake,
} from 'react-icons/fa';
import {
  LiaFileContractSolid
} from 'react-icons/lia';
import {
  BsFillPersonFill,
  BsCollection,
  BsFillLayersFill,
  BsTextParagraph,
} from 'react-icons/bs';
import {
  MdFamilyRestroom,
  MdGroups2,
  MdLocalMovies,
  MdLocalGroceryStore,
  MdOutlineEvent,
  MdFollowTheSigns,
  MdOutlineExplore,
} from 'react-icons/md';
import {
  BiSolidLandscape,
  BiSolidArea,
  BiSolidPurchaseTag,
} from 'react-icons/bi';
import {
  SlActionRedo
} from 'react-icons/sl';
import {
  PiCirclesThreeFill,
  PiUniteFill,
  PiAirplaneTakeoffFill,
} from 'react-icons/pi';
import {
  GrResources
} from 'react-icons/gr';
import {
  GoListOrdered
} from 'react-icons/go';
import {
  RiAuctionFill
} from 'react-icons/ri';
import {
  TbRepeatOnce
} from 'react-icons/tb';

const ToObject = name => {
  switch(name) {
  case "Open Drafting":
    return GiCardRandom
  case "Hand Management":
    return GiCardExchange
  case "Contracts":
    return LiaFileContractSolid
  case "Solo / Solitaire Game":
    return BsFillPersonFill
  case "Grid Movement":
  case "Hexagon Grid":
    return GiHexes
  case "Card Play Conflict Resolution":
  case "Deck, Bag, and Pool Building":
  case "Campaign / Battle Card Driven":
    return GiCardPlay
  case "Set Collection":
    return BsCollection
  case "Strategy Games":
    return FaChessBoard
  case "Family Games":
    return MdFamilyRestroom
  case "Abstract Strategy":
  case "Abstract Games":
    return GiAbstract047
  case "Wargame":
  case "Wargames":
    return GiBattleTank
  case "Party Game":
  case "Party Games":
    return GiPartyPopper
  case "Thematic Games":
    return GiPalette
  case "Dice Rolling":
    return GiRollingDices
  case "Variable Player Powers":
    return VarietyIcon
  case "Income":
    return GiReceiveMoney
  case "Tile Placement":
    return GiDominoTiles
  case "Force Commitment":
    return GiMightyForce
  case "Economic":
    return GiBanknote
  case "End Game Bonuses":
    return GiCardPick
  case "Card Game":
    return GiCardAceSpades
  case "City Building":
    return GiModernCity
  case "Fighting":
    return GiBoxingGlove
  case "Medieval":
    return GiMedievalGate
  case "Fantasy":
    return GiElfEar
  case "Science Fiction":
    return FaReact
  case "Territory Building":
    return BiSolidLandscape
  case "Mythology":
  case "Civilization":
    return GiAncientColumns
  case "Ancient":
    return GiAncientRuins
  case "Animals":
    return FaDog
  case "Miniatures":
    return GiMinions
  case "Novel-based":
    return GiBookmarklet
  case "Team-Based Game":
  case "Area Majority / Influence":
    return MdGroups2
  case "Action Points":
    return PiCirclesThreeFill
  case "Programmed Movement":
  case "Area Movement":
  case "Area-Impulse":
  case "Resource to Move":
    return BiSolidArea
  case "Layering":
    return BsFillLayersFill
  case "Travel":
    return PiAirplaneTakeoffFill
  case "Farming":
    return GiFarmTractor
  case "Adventure":
    return GiAxeSword
  case "Puzzle":
    return FaPuzzlePiece
  case "Cooperative Game":
    return PiUniteFill
  case "Increase Value of Unchosen Resources":
    return GrResources
  case "Movies / TV / Radio theme":
    return MdLocalMovies
  case "Political":
    return GiPublicSpeaker
  case "Follow":
    return MdFollowTheSigns
  case "Renaissance":
    return GiMonaLisa
  case "Market":
    return MdLocalGroceryStore
  case "Events":
    return MdOutlineEvent
  case "Worker Placement":
  case "Worker Placement, Different Worker Types":
    return GiMeeple
  case "Push Your Luck":
    return GiClover
  case "Memory":
    return GiBrain
  case "Communication Limits":
    return GiDiscussion
  case "Deduction":
    return GiMagnifyingGlass
  case "Spies/Secret Agents":
  case "Hidden Roles":
    return GiSpy
  case "Word Game":
    return BsTextParagraph
  case "Turn Order: Auction":
  case "Turn Order: Claim Action":
    return GoListOrdered
  case "Catch the Leader":
    return GiPodiumWinner
  case "Industry / Manufacturing":
    return FaIndustry
  case "Ownership":
    return GiHouseKeys
  case "Delayed Purchase":
    return BiSolidPurchaseTag
  case "Victory Points as a Resource":
  case "Hidden Victory Points":
    return GiStarsStack
  case "Auction: Dutch":
    return RiAuctionFill
  case "Take That":
    return GiBloodySword
  case "Simultaneous Action Selection":
  case "Action Retrieval":
    return SlActionRedo
  case "Religious":
    return GiChurch
  case "American West":
    return GiWesternHat
  case "Move Through Deck":
    return GiCardDraw
  case "Once-Per-Game Abilities":
    return TbRepeatOnce
  case "Modular Board":
    return GiPuzzle
  case "Trains":
    return FaTrain
  case "Space Exploration":
  case "Exploration":
    return MdOutlineExplore
  case "Horror":
    return GiMonsterGrasp
  case "Betting and Bluffing":
    return GiFingersCrossed
  case "Negotiation":
    return FaHandshake
  case "Voting":
    return GiVote
  case "Ladder Climbing":
    return GiLaddersPlatform
  case "Murder/Mystery":
    return GiChalkOutlineMurder
  default:
    return () => name.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')
  }
}

const Switch = ({ name, style }) => {
  let Icon = ToObject(name)
  return <Icon style={style} />
}

const Component = ({ url, name, variant = "circle", onMouseEnter, onMouseLeave, ...rest }) => {
  const { sx, size = 180 } = rest;

  return (
    <Avatar
      src={url}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      variant={variant}
      sx={{
        width: size,
        height: size,
        margin: "auto",
        backgroundColor: "#e5e9f0",
        color: "#2e3440",
        boxShadow: "0 15px 35px rgba(50,50,93,.4)",
        fontSize: "4rem",
        ...sx
      }}
    >
      <Switch name={name} size={size} style={{ width: size/2, height: size/2 }} />
    </Avatar>
  )
}

export default Component;
