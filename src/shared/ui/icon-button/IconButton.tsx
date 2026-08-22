import React from 'react';

import classNames from 'classnames';
import { icons, IconName } from 'shared/icons';
import './IconButton.scss';

interface IconButtonProps {
  icon?: IconName;
  text?: string;
  size?: number;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const IconButton = ({icon, text, size = 24, iconPosition = 'left', className}: IconButtonProps) => {
  const iconEl = icon &&
    <img
      src={icons[icon]}
      alt=""
      width={size}
      height={size}
      className="icon-button-icon"
    />;
  const textEl = text &&
    <span
      className="icon-button-text"
    >
      {text}
    </span>;

  return (
    <div
      className={classNames('icon-button', className)}
    >
      {iconPosition === 'left' ? iconEl : textEl}
      {iconPosition === 'left' ? textEl : iconEl}
    </div>
  );
};
