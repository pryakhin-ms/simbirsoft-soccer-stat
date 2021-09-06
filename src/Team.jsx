import React from 'react';
import football from './img/football.png';

function Item(props) {
  const { team } = props;
  return (
    <>
      <div className="col">
        <div className="card shadow-sm">
          <h5 className="card-header">{team.shortName}</h5>
          <img src={team.crestUrl || football} className="card-img-top mt-2" width="100%" height="225" focusable="false" alt="" />
          <div className="card-body">
            <p className="card-text">Some info about team</p>
            <div className="d-flex justify-content-between align-items-center">
              <button type="button" className="btn btn-sm btn-outline-secondary">Календарь</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
