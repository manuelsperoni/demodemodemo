import { Flex } from '@chakra-ui/react';
import GridHeader from './GridHeader';
import GridMain from './GridMain';
import GridEdit from './GridEdit';

export default function Grid() {
  return (
    <Flex direction="column" flex="1">
      <GridHeader />
      <GridMain />
      <GridEdit />
    </Flex>
  );
}
