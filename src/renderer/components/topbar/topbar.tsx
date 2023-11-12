import { Flex, Spacer, Text } from '@chakra-ui/react';
import TopBarWin from './topbar-win';

export default function TopBar() {
  return (
    <Flex
      borderBottom="1px"
      borderColor="brand.400"
      justify="right"
      align="center"
      paddingInline={4}
      bg="brand.600"
      flex="0 0 60px"
    >
      <Text color="brand.100" fontSize="2xl">
        Workspace
      </Text>
      <Spacer />
      <TopBarWin />
    </Flex>
  );
}
