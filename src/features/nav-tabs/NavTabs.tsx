import React from 'react';

import './NavTabs.scss';

const NAV_ITEMS = [
  'Финансы',
  'Склад',
  'Аналитика',
  'Автоматизация',
];

const ACTIVE_NAV_ITEM = 'Финансы';

export const NavTabs = () => (
  <div
    className="nav-tabs"
  >
    {NAV_ITEMS.map((item) => (
      <div
        key={item}
        className={item === ACTIVE_NAV_ITEM ? 'nav-tab nav-tab-active' : 'nav-tab'}>
        {item}
      </div>
    ))}
  </div>
);
