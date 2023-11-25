import { Flex } from '@chakra-ui/react';

import Grid from './grid/Grid';

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
      <Grid />
    </Flex>
  );
}
