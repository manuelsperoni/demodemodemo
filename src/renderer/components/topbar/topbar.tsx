import { Flex, Spacer, Text } from '@chakra-ui/react';
import TopbarWinactions from './topbar-winactions';

export default function Topbar() {
  return (
    <Flex
      borderBottom="1px"
      borderColor="brand.400"
      justify="right"
      align="center"
      paddingInline={4}
      bg="brand.500"
      flex="0 0 60px"
    >
      <Text color="brand.100" fontSize="xl">
        Personal expenses
      </Text>
      <Spacer />
      <TopbarWinactions />
    </Flex>
  );
}
