import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import LeaguesTab from './LeaguesTab';

function App() {
  const [activeTab, setTab] = useState('leagues');
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

  const changeActiveTab = (e) => {
    e.preventDefault();
    setTab(activeTab === 'leagues' ? 'teams' : 'leagues');
  };

  return (
    <>
      <Sidebar changeActiveTab={changeActiveTab} activeTab={activeTab} />
      {activeTab === 'leagues' && <LeaguesTab leaguesList={leaguesList} />}
      {activeTab === 'teams' && null}
    </>
  );
}

export default App;
