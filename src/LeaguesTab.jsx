import React from 'react';
import Item from './Item';
import Spinner from './Spinner';

function LeaguesTab(props) {
  const { leaguesList, uiState } = props;
  return (
    <div className="container">
      Список лиг
      <hr />
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 g-3">
        {uiState === 'loading' && <Spinner />}
        {leaguesList.map((league) => <Item league={league} key={league.id} />)}
      </div>
    </div>
  );
}

export default LeaguesTab;
