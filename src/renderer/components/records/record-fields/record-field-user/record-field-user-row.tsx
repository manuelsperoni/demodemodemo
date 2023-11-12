import { Avatar, Text, Flex } from '@chakra-ui/react';

export default function RecordFieldsUserRow() {
  return (
    <Flex justify="center" align="center" gap="2">
      <Avatar name="manuel" size="xs" />
      <Text color="brand.100">manuel</Text>
    </Flex>
  );
}
