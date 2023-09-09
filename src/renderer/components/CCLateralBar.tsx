import { Flex, Spacer, Text, Icon } from '@chakra-ui/react';
import { RiSettings5Fill } from 'react-icons/ri';

export default function CCLateralBar() {
  return (
    <Flex
      direction="column"
      gap="10"
      bg="brand.600"
      flex="1"
      padding={2}
      justify="center"
      align="center"
    >
      <Spacer />
      <Icon as={RiSettings5Fill} color="brand.400" boxSize={6} />
    </Flex>
  );
}
