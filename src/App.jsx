import React, { useState, useEffect } from 'react';
import fetchLeagues from './api/fetchLeagues';
import fetchTeams from './api/fetchTeams';
// import axios from 'axios';
import Sidebar from './Sidebar';
import DataTab from './DataTab';

function App() {
  const [uiState, setUiState] = useState('init');
  const [activeTab, setTab] = useState('leagues');
  const [leaguesList, setLeaguesData] = useState([]);
  const [teamsList, setTeamsData] = useState([]);
  useEffect(async () => {
    setUiState('loading');
    try {
      setLeaguesData(await fetchLeagues());
      setUiState('init');
    } catch (e) {
      setUiState('error');
    }
  }, []);

  const changeActiveTab = async (e) => {
    e.preventDefault();
    // Определяется следующий активный таб
    const newTab = activeTab === 'leagues' ? 'teams' : 'leagues';
    // Функция запрашивает данные и устанавливает их в стейт при смене активного таба
    const setLeaguesOrTeams = async () => {
      // Определение текущих данных, в зависимости от нового активного таба
      const activeData = newTab === 'leagues' ? leaguesList : teamsList;
      // Если данные уже есть, то загружать не нужно
      if (activeData.length > 0) {
        console.log(activeData);
        return;
      }
      // Определение функции для загрузки данных, в зав-ти от нового активного таба
      const fetchFunction = newTab === 'leagues' ? fetchLeagues : fetchTeams;
      // Определение функции для установки нового состояния, в зав-ти от нового активного таба
      const setStateFunction = newTab === 'leagues' ? setLeaguesData : setTeamsData;
      setUiState('loading');
      try {
        setStateFunction(await fetchFunction());
        setUiState('init');
      } catch {
        setUiState('error');
      }
    };
    setTab(newTab);
    setLeaguesOrTeams();
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
