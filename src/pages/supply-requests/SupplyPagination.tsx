import React from 'react';

import { Select } from 'antd';
import classNames from 'classnames';

import { IconButton } from 'shared/ui/icon-button/IconButton';
import './SupplyPagination.scss';

const PAGES = [1, 2, 3, 4, 5];

export const SupplyPagination = () => (
  <div
    className="supply-pagination"
  >
    <div
      className="supply-pagination-pages"
    >
      <IconButton
        icon="chevronLeft"
        className="supply-pagination-arrow"
      />
      {PAGES.map((page) => (
        <div
          key={page}
          className={classNames('supply-pagination-page', page === 1 && 'supply-pagination-page-active')}
        >
          {page}
        </div>
      ))}
      <IconButton
        icon="chevronLeft"
        className="supply-pagination-arrow supply-pagination-arrow-next"
      />
    </div>

    <div
      className="supply-pagination-size"
    >
      <span>
        Строк на странице
      </span>
      <Select
        defaultValue={50}
        options={[
          {value: 10, label: '10'},
          {value: 25, label: '25'},
          {value: 50, label: '50'},
          {value: 100, label: '100'},
        ]}
        className="supply-pagination-select"
      />
    </div>
  </div>
);
