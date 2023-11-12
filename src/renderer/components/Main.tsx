import { Flex } from '@chakra-ui/react';
import Records from './records/records';

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
      <Records />
    </Flex>
  );
}
