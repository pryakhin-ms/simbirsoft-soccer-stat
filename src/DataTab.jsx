import React from 'react';
import Item from './Item';
import Team from './Team';
import Spinner from './Spinner';

function DataTab(props) {
  const {
    activeTab, leaguesList, teamsList, uiState,
  } = props;
  console.log(uiState);
  return (
    <div className="container">
      {activeTab === 'leagues' ? 'Список лиг' : 'Список команд'}
      <hr />
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 g-3">
        {uiState === 'loading' && <Spinner />}
        {activeTab === 'leagues' && leaguesList.map((league) => <Item league={league} key={league.id} />)}
        {activeTab === 'teams' && teamsList.map((team) => <Team team={team} key={team.id} />)}
      </div>
    </div>
  );
}

export default DataTab;
