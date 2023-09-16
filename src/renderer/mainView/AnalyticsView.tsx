import {
  Heading,
  Flex,
  Spacer,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
} from '@chakra-ui/react';

import { IoAnalyticsSharp } from 'react-icons/io5';
import { AiOutlineDown } from 'react-icons/ai';

function PeriodSelector() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<AiOutlineDown />}
        size="xs"
        bg="transparent"
        color="brand.300"
        _hover={{ bg: 'brand.400', color: 'brand.100' }}
        _expanded={{ bg: 'brand.400' }}
      >
        Income
      </MenuButton>
      <MenuList bg="brand.600" borderColor="brand.400">
        <MenuItem
          bg="brand.600"
          color="brand.300"
          _hover={{ bg: 'transparent', color: 'brand.100' }}
        >
          Expense
        </MenuItem>
        <MenuItem
          bg="brand.600"
          color="brand.300"
          _hover={{ bg: 'transparent', color: 'brand.100' }}
        >
          All
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
function TransactionHeader() {
  return (
    <Flex
      borderBottom="1px"
      borderColor="brand.400"
      gap="5"
      align="center"
      padding="2"
    >
      <Icon as={IoAnalyticsSharp} color="brand.200" boxSize={6} />
      <Heading as="h1" size="xl" color="brand.100">
        Analytics
      </Heading>
      <Spacer />
      <PeriodSelector />
    </Flex>
  );
}

export default function AnalitycsView() {
  return (
    <Flex direction="column" gap="5">
      <TransactionHeader />
    </Flex>
  );
}
