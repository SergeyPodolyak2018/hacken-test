import { Flex } from 'antd';
import { Pagination } from 'antd';
import { TPaginationProps } from '../definitions/pagination';

export function PaginationContainer(props: TPaginationProps) {
  const handleChang = (page: number, pageSize: number) => {
    if (props.current !== page) {
      props.changePage(page);
    }
    if (props.size !== pageSize) {
      props.changeSize(pageSize);
    }
  };

  return (
    <Flex
      gap='middle'
      align='center'
      style={{ height: '42px' }}
    >
      <Pagination
        style={{ marginLeft: 'auto', marginRight: '20px' }}
        total={props.total}
        showSizeChanger
        showQuickJumper
        showTotal={(total) => `Total ${total} items`}
        onChange={handleChang}
      />
    </Flex>
  );
}
