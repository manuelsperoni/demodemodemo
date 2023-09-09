import { Flex, Box } from '@chakra-ui/react';
import ExpenseView from 'renderer/view/ExpenseView';

export default function CCMain() {
  return (
    <Flex flex="1" direction="row">
      {/* Left column */}
      <Flex
        overflowY="scroll"
        bg="brand.700"
        flex="1"
        direction="column"
        paddingInline="5"
        height="calc(100vh - 70px)"
        sx={{
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <ExpenseView />
      </Flex>
      {/* Right column */}
      <Flex
        height="calc(100vh - 70px)"
        overflowY="scroll"
        bg="brand.500"
        flex="1"
        direction="column"
        padding="5"
        sx={{
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      />
    </Flex>
  );
}
