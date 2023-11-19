import { MenuItem, Flex, Avatar, Text } from '@chakra-ui/react';

export default function RecordFieldUserRowMenu() {
  return (
    <>
      {[...Array(2)].map(() => (
        <MenuItem
          borderRadius="10px"
          bg="transparent"
          color="brand.300"
          _hover={{ bg: 'brand.300', color: 'brand.100' }}
        >
          <Flex justify="center" align="center" gap="2">
            <Avatar name="Manuel" size="xs" />
            <Text color="brand.100">Manuel</Text>
          </Flex>
        </MenuItem>
      ))}
    </>
  );
}
