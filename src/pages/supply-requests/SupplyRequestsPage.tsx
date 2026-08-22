import React from 'react';

import { SupplyFiltersPanel } from 'pages/supply-requests/SupplyFiltersPanel';
import { SupplyPagination } from 'pages/supply-requests/SupplyPagination';
import { SupplyRequestsTable } from 'pages/supply-requests/SupplyRequestsTable';
import './SupplyRequestsPage.scss';

export const SupplyRequestsPage = () => (
  <div
    className="supply-requests-page"
  >
    <div
      className="supply-requests-label"
    >
      Заявки на поставку
    </div>

    <div
      className="supply-requests-card"
    >
      <SupplyFiltersPanel/>
      <SupplyRequestsTable/>
      <SupplyPagination/>
    </div>
  </div>
);
