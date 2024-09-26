import { Flex } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

export function Header() {
  return (
    <Flex
      gap='middle'
      align='start'
      vertical
      style={{ height: '80px' }}
    >
      <Title
        level={2}
        style={{ marginLeft: '10px' }}
      >
        Coins & Markets
      </Title>
    </Flex>
  );
}
