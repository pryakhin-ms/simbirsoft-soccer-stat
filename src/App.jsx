import React, { useState, useEffect } from 'react';
import fetchLeagues from './api/fetchLeagues';
// import axios from 'axios';
import Sidebar from './Sidebar';
import DataTab from './DataTab';

function App() {
  const [uiState, setUiState] = useState('init');
  const [activeTab, setTab] = useState('leagues');
  const [leaguesList, setLeaguesData] = useState([]);
  useEffect(async () => {
    setUiState('loading');
    try {
      setLeaguesData(await fetchLeagues());
      setUiState('init');
    } catch (e) {
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
      {activeTab === 'leagues' && <DataTab leaguesList={leaguesList} uiState={uiState} />}
      {activeTab === 'teams' && null}
    </>
  );
}

export default App;
