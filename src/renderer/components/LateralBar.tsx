import { Flex, Spacer, Text, Icon } from '@chakra-ui/react';
import { RiSettings5Fill } from 'react-icons/ri';

export default function LateralBar() {
  return (
    <Flex
      display={{ base: 'none', md: 'flex' }}
      width="60px"
      direction="column"
      gap="10"
      flex="1"
      padding={2}
      justify="center"
      align="center"
      borderRightWidth="2px"
      borderColor="brand.400"
      bg="brand.600"
    >
      <Spacer />
      <Icon as={RiSettings5Fill} color="brand.400" boxSize={6} />
    </Flex>
  );
}
