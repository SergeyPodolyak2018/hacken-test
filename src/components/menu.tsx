import { Flex } from 'antd';

import { Select } from 'antd';
import { MMenuCurency, MMenuOrder } from '../models/main';

import { capitalize, formatText } from '../utils/utils';
import { TMenuProps } from '../definitions/menu';

export function Menu(props: TMenuProps) {
  const handleChangeCurrency = (value: {
    value: TMenuProps['currency'];
    label: React.ReactNode;
  }) => {
    props.changeCurency(value.value);
  };
  const handleChangeOrder = (value: {
    value: TMenuProps['order'];
    label: React.ReactNode;
  }) => {
    props.changeOrder(value.value);
  };

  return (
    <Flex
      gap='middle'
      align='start'
      style={{ height: '42px' }}
    >
      <Select
        labelInValue
        value={{
          value: props.currency,
          label: <span>{capitalize(props.currency)}</span>,
        }}
        style={{ width: 200, marginLeft: '10px' }}
        onChange={handleChangeCurrency}
        options={MMenuCurency}
      />
      <Select
        labelInValue
        value={{
          value: props.order,
          label: <span>{formatText(props.order)}</span>,
        }}
        style={{ width: 200 }}
        onChange={handleChangeOrder}
        options={MMenuOrder}
      />
    </Flex>
  );
}
