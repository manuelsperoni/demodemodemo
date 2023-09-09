import { Flex } from '@chakra-ui/react';
import ExpenseView from 'renderer/view/ExpenseView';

export default function CCMain() {
  return (
    <Flex flex="1" direction="row">
      <Flex bg="brand.600" width="50px" />
      <Flex bg="brand.700" flex="1" direction="column" height="200" padding="5">
        <ExpenseView />
      </Flex>
      <Flex bg="brand.500" flex="1" />
    </Flex>
  );
}
