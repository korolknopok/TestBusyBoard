import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { icons } from 'shared/icons';
import './SupplyRequestsTable.scss';

interface SupplyRow {
  key: string;
  number: string;
  date: string;
  organization: string;
  counterparty: string;
  supplyNumber: string;
  quantity: number;
  status: string;
  statusType: 'success' | 'error';
  receiptDate: string;
  deliveryTime: string;
  amount: string;
  comment: string;
  muted?: boolean;
}

const columnTitle = (text: string) => (
  <span
    className="supply-table-header"
  >
    {text}
    <img
      src={icons.filter}
      alt=""
      width={16}
      height={16}
    />
  </span>
);

const DATA_SOURCE: SupplyRow[] = [
  {
    key: '1',
    number: '00001',
    date: '01.01.2024  12:40',
    organization: 'ИП Иванов Иван Иванович',
    counterparty: 'ООО "Название компании"',
    supplyNumber: '123123123123123',
    quantity: 1,
    status: 'Принят без расхождений',
    statusType: 'success',
    receiptDate: '27.07.2024  12:00',
    deliveryTime: 'Время доставки: 4д. 12ч.',
    amount: '100 000,00',
    comment: 'Первый заказ для МП',
  },
  {
    key: '2',
    number: '00002',
    date: '01.01.2024  12:40',
    organization: 'ИП Иванов Иван Иванович',
    counterparty: 'ООО "Название компании"',
    supplyNumber: '123123123123123',
    quantity: 1,
    status: 'Не зарезервирован',
    statusType: 'error',
    receiptDate: '',
    deliveryTime: '',
    amount: '100 000,00',
    comment: 'Первый заказ для МП',
    muted: true,
  },
];

const dateCell = (date: string) => {
  const [day, time] = date.trim().split(/\s+/);
  return (
    <span
      className="supply-table-date"
    >
      {day}
      <span
        className="supply-table-date-divider"
      />
      {time}
    </span>
  );
};

const COLUMNS: ColumnsType<SupplyRow> = [
  {dataIndex: 'number', title: columnTitle('№')},
  {dataIndex: 'date', title: columnTitle('Дата'), render: dateCell},
  {dataIndex: 'organization', title: columnTitle('Организация')},
  {dataIndex: 'counterparty', title: columnTitle('Контрагент')},
  {dataIndex: 'supplyNumber', title: columnTitle('№ поставки')},
  {dataIndex: 'quantity', title: columnTitle('Кол-во'), align: 'right'},
  {
    dataIndex: 'status',
    title: columnTitle('Статус'),
    align: 'center',
    render: (status: string, record) => (
      <span
        className={`supply-table-status supply-table-status-${record.statusType}`}
      >
        {status}
      </span>
    ),
  },
  {
    dataIndex: 'receiptDate',
    title: columnTitle('Дата приемки'),
    className: 'supply-table-cell-small',
    render: (receiptDate: string, record) => receiptDate && (
      <div>
        <div
          className="supply-table-date-muted"
        >
          {dateCell(receiptDate)}
        </div>
        <div>
          {record.deliveryTime}
        </div>
      </div>
    ),
  },
  {dataIndex: 'amount', title: columnTitle('Сумма')},
  {dataIndex: 'comment', title: columnTitle('Комментарий'), className: 'supply-table-cell-small'},
];

export const SupplyRequestsTable = () => (
  <Table
    dataSource={DATA_SOURCE}
    columns={COLUMNS}
    rowClassName={(record) => (record.muted ? 'supply-table-row-muted' : '')}
    pagination={false}
    className="supply-requests-table"
  />
);
