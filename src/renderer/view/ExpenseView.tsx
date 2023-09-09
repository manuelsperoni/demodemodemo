import {
  Heading,
  Flex,
  Text,
  Spacer,
  Avatar,
  Badge,
  Icon,
} from '@chakra-ui/react';
import { HiQueueList } from 'react-icons/hi2';
import { GoSquare } from 'react-icons/go';

function TransactionListItemRecord() {
  return (
    <Flex gap="10" _hover={{ bg: 'brand.400' }} padding={2} borderRadius={5}>
      <Flex align="center" gap="2">
        <Icon as={GoSquare} color="brand.accent" boxSize={6} />
        <Flex direction="column">
          <Text color="brand.200">Category</Text>
          <Text color="brand.400">Subcategory</Text>
        </Flex>
      </Flex>
      <Flex>
        <Flex align="center" gap="3">
          <Avatar src="https://bit.ly/sage-adebayo" size="sm" />
          <Text color="brand.100">Description</Text>
        </Flex>
      </Flex>
      <Spacer />
      <Text color="brand.100">- €400</Text>
    </Flex>
  );
}

function TransactionListItem() {
  return (
    <Flex gap="2" direction="column">
      {/* Header */}
      <Flex align="center" borderBottom="1px" borderColor="brand.400">
        <Flex gap={3} align="center">
          <Text fontSize="3xl" fontWeight="bold" color="brand.100">
            27
          </Text>
          <Badge size="" bg="brand.400" color="brand.200">
            Lun
          </Badge>
          <Text color="brand.300">07.2023</Text>
        </Flex>
        <Spacer />
        <Flex gap={10}>
          <Text color="brand.100">+ € 27</Text>
          <Text color="brand.100">- € 227</Text>
        </Flex>
      </Flex>
      {/* Transaction list */}
      <TransactionListItemRecord />
      <TransactionListItemRecord />
    </Flex>
  );
}

function TransactionSummary() {
  return (
    <Flex>
      <Text />
    </Flex>
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
      <Icon as={HiQueueList} color="brand.200" boxSize={6} />
      <Heading as="h1" size="xl" color="brand.100">
        Transaction
      </Heading>
    </Flex>
  );
}

function TransactionList() {
  return (
    <>
      <TransactionListItem />
      <TransactionListItem />
      <TransactionListItem />
      <TransactionListItem />
      <TransactionListItem />
      <TransactionListItem />
      <TransactionListItem />
      <TransactionListItem />
      <TransactionListItem />
    </>
  );
}

export default function ExpenseView() {
  return (
    <Flex direction="column">
      <TransactionHeader />
      <TransactionSummary />
      <TransactionList />
    </Flex>
  );
}
