import { Heading, Flex } from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';

export default function ExpenseView() {
  return (
    <Flex
      borderBottom="1px"
      borderColor="brand.400"
      gap="5"
      align="center"
      padding="2"
    >
      <PhoneIcon color="brand.200" boxSize={6} />
      <Heading as="h1" size="xl" color="brand.100">
        Expense
      </Heading>
    </Flex>
  );
}
