import React from 'react';

import { Onboarding } from 'features/onboarding/Onboarding';
import { SupplyFiltersPanel } from 'pages/supply-requests/filters-panel/SupplyFiltersPanel';
import { SupplyPagination } from 'pages/supply-requests/pagination/SupplyPagination';
import { SupplyRequestsTable } from 'pages/supply-requests/requests-table/SupplyRequestsTable';
import './SupplyRequestsPage.scss';

export const SupplyRequestsPage = () => (
  <div
    className="supply-requests-page"
  >
    <Onboarding/>

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
