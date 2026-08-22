import React from 'react';
import { Select } from 'antd';

import { IconButton } from 'shared/ui/icon-button/IconButton';
import './SupplyFiltersPanel.scss';

const SELECT_FIELDS = [
  {
    label: 'Дата',
    placeholder: 'Выбрать',
    defaultValue: 'date',
    options: [{ value: 'date', label: '01.01.2025 - 31.01.2025' }],
  },
  {label: 'Контрагент', placeholder: 'Выбрать'},
  {label: 'Организация', placeholder: 'Выбрать'},
  {label: 'Товар', placeholder: 'Выбрать'},
  {label: 'Склад отправителя', placeholder: 'Выбрать склад'},
  {label: '№ поставки', placeholder: 'Выбрать'},
  {label: 'Способ доставки', placeholder: 'Выбрать'},
  {label: 'Статус операции', placeholder: 'Выбрать'},
  {label: 'Склад получателя', placeholder: 'Выбрать'},
  {label: 'Проведено', placeholder: 'Выбрать'},
];

export const SupplyFiltersPanel = () => (
  <div
    className="supply-filters-panel"
  >
    <div
      className="supply-filters-toolbar"
    >
      <div
        className="supply-filters-filter-button"
      >
        Фильтр
      </div>

      <IconButton
        icon="bookmark"
        className="supply-filters-icon-button"
      />
      <IconButton
        icon="eraser"
        className="supply-filters-icon-button"
      />
      <IconButton
        icon="scan"
        className="supply-filters-icon-button"
      />

      <div
        className="supply-filters-actions"
      >
        <IconButton
          icon="download"
          text="Загрузить по API"
          className="supply-filters-action-button"
        />
        <IconButton
          icon="plus"
          text="Заявка на поставку"
          className="supply-filters-action-button"
        />
        <IconButton
          icon="settings"
          className="supply-filters-icon-button supply-filters-settings-button"
        />
      </div>
    </div>

    <div
      className="supply-filters-fields"
    >
      {SELECT_FIELDS.map(({label, placeholder, options, defaultValue}) => (
        <div
          key={label}
          className="supply-filters-field"
        >
          <div
            className="supply-filters-field-label"
          >
            {label}
          </div>
          <Select
            placeholder={placeholder}
            options={options}
            defaultValue={defaultValue}
            size="large"
            className="supply-filters-select"
          />
        </div>
      ))}
    </div>

    <div
      className="supply-filters-saved"
    >
      <div
        className="supply-filters-saved-filter"
      >
        Фильтр первый
      </div>
      <div
        className="supply-filters-saved-filter supply-filters-saved-filter-active"
      >
        Фильтр первый
      </div>
    </div>
  </div>
);
