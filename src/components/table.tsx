import { Flex } from 'antd';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import { Spin } from 'antd';
import { Image } from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;

import { TData, TMain } from '../definitions/main';

export function TableMarket(props: {
  data: TData[];
  status: TMain['status'];
  curecy: TMain['currency'];
}) {
  const columns: TableProps<TData>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => (
        <Flex
          gap='middle'
          align='center'
        >
          <Image
            width={32}
            src={record.image}
          />

          <Text>{record.name}</Text>
        </Flex>
      ),
    },
    {
      title: 'Current Price',
      dataIndex: 'current_price',
      key: 'current_price',
      render: (_, record) => (
        <Text>
          {record.current_price} {props.curecy}
        </Text>
      ),
    },
    {
      title: 'Circulating Supply',
      dataIndex: 'circulating_supply',
      key: 'circulating_supply',
    },
  ];

  return (
    <Flex
      gap='middle'
      align='center'
      style={{
        width: '100%',
        height: 'calc(100% - 162px)',
        overflowY: 'scroll',
        justifyContent: 'space-around',
      }}
    >
      {props.status === 'loading' ? (
        <Spin />
      ) : (
        <Table<TData>
          style={{ width: '100%', height: '100%' }}
          columns={columns}
          dataSource={props.data.map((el) => ({ ...el, key: el.id }))}
          pagination={false}
        />
      )}
    </Flex>
  );
}
