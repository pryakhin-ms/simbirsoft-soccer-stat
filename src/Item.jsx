import React from 'react';
import football from './img/football.png';

function Item() {
  return (
    <>
      <div className="col">
        <div className="card shadow-sm">
          <h5 className="card-header">Text Above</h5>
          <img src={football} className="card-img-top" width="100%" height="225" focusable="false" alt="" />
          <div className="card-body">
            <p className="card-text">Some info about league</p>
            <div className="d-flex justify-content-between align-items-center">
              <button type="button" className="btn btn-sm btn-outline-secondary">Календарь</button>
              <small className="text-muted">Доступно 5 сезонов</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
