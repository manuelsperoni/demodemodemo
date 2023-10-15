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
import { BiTrendingUp, BiTrendingDown } from 'react-icons/bi';
import { useAppContext } from 'renderer/context/AppContext';
import { TransactionType } from 'renderer/types/Types';

function TransactionListItemRecord({ transaction }: TransactionType) {
  return (
    <Flex gap="10" _hover={{ bg: 'brand.500' }} padding={2} borderRadius={5}>
      <Flex align="center" gap="10" flex="1">
        <Flex
          direction="column"
          flex="1 1 auto"
          overflow="hidden"
          flex="0 0 70px"
        >
          <Text color="brand.200">{transaction.categoryDescription}</Text>
          <Text color="brand.200" fontSize="sm">
            {transaction.subcategoryDescription}
          </Text>
        </Flex>
        <Avatar size="sm" name={transaction.userDescription} />
        <Text color="brand.100" fontSize="xl" flex="1">
          {/* {JSON.stringify(transaction)} */}
          {transaction.description}
        </Text>
      </Flex>

      <Text color="green.300">{transaction.amount}</Text>
    </Flex>
  );
}

function TransactionListItem() {
  const state = useAppContext();
  return (
    <Flex direction="column">
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
          <Text color="green.300">+ € 27</Text>
          <Text color="red.400">- € 227</Text>
        </Flex>
      </Flex>
      {state.transaction.map((el) => (
        <TransactionListItemRecord transaction={el} />
      ))}
    </Flex>
  );
}

function TransactionSummary() {
  return (
    <Flex>
      <Flex direction="column" align="center" justify="center">
        <Flex gap="2">
          <Icon as={BiTrendingUp} color="green.300" boxSize={6} />
          <Text color="brand.300">Income</Text>
        </Flex>
        <Text color="brand.200" fontSize="3xl" fontWeight="bold">
          + €400
        </Text>
      </Flex>
      <Spacer />
      <Flex direction="column" align="center" justify="center">
        <Flex gap="2">
          <Icon as={BiTrendingDown} color="red.500" boxSize={6} />
          <Text color="brand.300">Excpense</Text>
        </Flex>
        <Text color="brand.200" fontSize="3xl" fontWeight="bold">
          + €400
        </Text>
      </Flex>
      <Spacer />

      <Flex direction="column" align="center" justify="center">
        <Flex gap="2">
          {/* <Icon as={BiTrendingUp} color="brand.accent" boxSize={6} /> */}
          <Text color="brand.300">Total</Text>
        </Flex>
        <Text color="brand.200" fontSize="3xl" fontWeight="bold">
          + €400
        </Text>
      </Flex>
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
  return <TransactionListItem />;
}

export default function ExpenseView() {
  return (
    <>
      <TransactionHeader />
      <TransactionSummary />
      <TransactionList />
    </>
  );
}
