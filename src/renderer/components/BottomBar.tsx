import { Flex, Text } from '@chakra-ui/react';

export default function BottomBar() {
  return (
    <Flex
      justify="right"
      align="center"
      paddingInline={4}
      bg="brand.accent"
      flex="0 0 30px"
    >
      <Text color="brand.100"> All purpose tracker V1.0.0</Text>
    </Flex>
  );
}
