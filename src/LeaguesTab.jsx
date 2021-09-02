import React from 'react';
import Item from './Item';

function LeaguesTab(props) {
  const { leaguesList } = props;
  return (
    <div className="container">
      Список лиг
      <hr />
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 g-3">
        {leaguesList.map((league) => <Item league={league} key={league.id} />)}
      </div>
    </div>
  );
}

export default LeaguesTab;
