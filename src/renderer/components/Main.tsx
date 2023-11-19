import { Flex } from '@chakra-ui/react';

import DataGrid from './records/DataGrid';

export default function Main() {
  return (
    <Flex
      overflowY="scroll"
      bg="brand.600"
      flex="1 1 auto"
      direction="column"
      sx={{
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <DataGrid />
    </Flex>
  );
}
