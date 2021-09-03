import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import LeaguesTab from './LeaguesTab';

function App() {
  const [uiState, setUiState] = useState('init');
  const [activeTab, setTab] = useState('leagues');
  const [leaguesList, setLeaguesData] = useState([]);
  useEffect(async () => {
    const fetchLeagues = async () => {
      const { data: { competitions } } = await axios({
        headers: { 'X-Auth-Token': 'a23f85ec349c4bb0ae562a4ba2b748a8' },
        method: 'get',
        url: 'http://api.football-data.org/v2/competitions?plan=TIER_ONE',
      });
      return competitions;
    };
    setUiState('loading');
    try {
      setLeaguesData(await fetchLeagues());
      setUiState('init');
    } catch (e) {
      console.log('!!!!!', e);
      setUiState('error');
    }
  }, []);

  const changeActiveTab = (e) => {
    e.preventDefault();
    setTab(activeTab === 'leagues' ? 'teams' : 'leagues');
  };

  return (
    <>
      <Sidebar changeActiveTab={changeActiveTab} activeTab={activeTab} />
      {activeTab === 'leagues' && <LeaguesTab leaguesList={leaguesList} uiState={uiState} />}
      {activeTab === 'teams' && null}
    </>
  );
}

export default App;
