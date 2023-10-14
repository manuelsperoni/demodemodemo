import { Flex, Icon } from '@chakra-ui/react';
import { RiSettings5Fill } from 'react-icons/ri';

export default function LateralBar() {
  return (
    <Flex
      direction="column"
      gap="20"
      paddingBlock={5}
      align="center"
      borderRightWidth="1px"
      borderColor="brand.400"
      bg="brand.600"
      height="100%"
      flex="0 0 50px"
    >
      <Icon as={RiSettings5Fill} color="brand.400" boxSize={6} />
    </Flex>
  );
}
