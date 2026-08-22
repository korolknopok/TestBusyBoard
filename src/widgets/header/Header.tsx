import React from 'react';

import { NavTabs } from 'features/nav-tabs/NavTabs';
import { IconButton } from 'shared/ui/icon-button/IconButton';
import { icons } from 'shared/icons';
import './Header.scss';

export const Header = () => (
  <div
    className="header"
  >
    <img
      src={icons.logo}
      alt="Busyboard"
      style={{
        width: 121,
        height: 22.53,
        flexShrink: 0,
      }}
    />

    <IconButton
      icon="star"
      text="Избранное"
      className="header-favorite"
    />

    <NavTabs/>

    <IconButton
      icon="chevronDown"
      text="ГК ТУЗЕМУН"
      iconPosition="right"
      size={16}
      className="header-org"
    />

    <div
      className="header-actions"
    >
      <div
        className="header-icons"
      >
        <IconButton
          icon="book"
          className="header-icons-first"
        />
        <IconButton
          icon="notification"
        />
      </div>

      <IconButton
        icon="user"
        size={16}
        className="header-avatar"
      />
    </div>
  </div>
);
