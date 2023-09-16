import { Flex, Spacer, Text, Icon } from '@chakra-ui/react';
import { RiSettings5Fill } from 'react-icons/ri';

export default function LateralBar() {
  return (
    <Flex
      direction="column"
      gap="10"
      flex="1"
      padding={2}
      justify="center"
      align="center"
      borderRight="1px"
      borderColor="brand.400"
    >
      <Spacer />
      <Icon as={RiSettings5Fill} color="brand.400" boxSize={6} />
    </Flex>
  );
}
