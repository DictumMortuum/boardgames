export const fetchPlayer = ({ id, year, yearFlag, count }) => {
  const url = new URL(`${process.env.REACT_APP_PLAYER_ENDPOINT}/player/${id}?year=${year}&year_flag=${yearFlag}`)

  if (count !== undefined) {
    url.searchParams.set("count", count)
  }

  return fetch(url.toString()).then(res => res.json())
}

export const fetchBoardgames = ({ id, year, yearFlag, count }) => {
  const url = new URL(`${process.env.REACT_APP_BOARDGAMES_ENDPOINT}/boardgames/${id}?year=${year}&year_flag=${yearFlag}`)

  if (count !== undefined) {
    url.searchParams.set("count", count)
  }

  return fetch(url.toString()).then(res => res.json())
}

export const fetchDistinct = ({ id, year, yearFlag }) => {
  const url = new URL(`${process.env.REACT_APP_PLAYER_ENDPOINT}/player/${id}/distinct?year=${year}&year_flag=${yearFlag}`)

  return fetch(url.toString()).then(res => res.json())
}
