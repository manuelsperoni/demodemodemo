import { Flex, Box } from '@chakra-ui/react';
import AnalyticsView from 'renderer/mainView/AnalyticsView';
import TransactionsView from 'renderer/mainView/TransactionsView';

export default function Main() {
  return (
    <Flex flex="1" direction="row">
      {/* Left column */}
      <Flex
        overflowY="scroll"
        bg="brand.600"
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
        <TransactionsView />
      </Flex>
      {/* Right column */}
      <Flex
        overflowY="scroll"
        bg="brand.500"
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
        <AnalyticsView />
      </Flex>
    </Flex>
  );
}
