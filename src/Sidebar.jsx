import React from 'react';

function Sidebar() {
  return (
    <div style={{ display: 'flex', height: 'auto' }}>
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '230px' }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <span className="fs-4">SoccerStat</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/home" className="nav-link active" aria-current="page">
              Лиги
            </a>
          </li>
          <li>
            <a href="/" className="nav-link link-dark">
              Команды
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
