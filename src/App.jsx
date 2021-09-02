import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import LeaguesTab from './LeaguesTab';

function App() {
  const [leaguesList, setLeaguesData] = useState([]);
  useEffect(async () => {
    const { data: { competitions } } = await axios({
      headers: { 'X-Auth-Token': 'a23f85ec349c4bb0ae562a4ba2b748a8' },
      method: 'get',
      url: 'http://api.football-data.org/v2/competitions?plan=TIER_ONE',
    });
    console.log(competitions);
    setLeaguesData(competitions);
  }, []);
  return (
    <>
      <Sidebar />
      <LeaguesTab leaguesList={leaguesList} />
    </>
  );
}

export default App;
