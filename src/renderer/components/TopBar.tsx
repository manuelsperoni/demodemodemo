import {
  Flex,
  IconButton,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  Input,
  Box,
  Center,
  Stack,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';
import { AiOutlineDown, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import {
  TfiMinus,
  TfiLayoutWidthFull,
  TfiClose,
  TfiPlus,
} from 'react-icons/tfi';
import { RiFilter3Line } from 'react-icons/ri';
import { useId, useRef, useState } from 'react';
import { useAppDispatch, useAppContext } from 'renderer/context/AppContext';
import { addTransaction } from 'renderer/actions/Actions';
import {
  CategoryType,
  SubcategoryType,
  UserType,
  DirectionType,
  CategoryListType,
  TransactionType,
} from 'renderer/types/Types';
import subcategoryFromCategory from '../helper/Helper';
import AddTransactionForm from './AddTransactionForm';

function WindowsAction() {
  return (
    <Flex>
      <IconButton aria-label="minimize" icon={<TfiMinus />} borderRadius={0} />
      <IconButton
        aria-label="maximixe"
        icon={<TfiLayoutWidthFull />}
        borderRadius={0}
      />
      <IconButton aria-label="close" icon={<TfiClose />} borderRadius={0} />
    </Flex>
  );
}

function DateSelector() {
  return (
    <Flex justify="center" align="center" gap="5">
      <IconButton aria-label="previous" icon={<AiOutlineLeft />} size="sm" />
      <Text color="brand.100" fontWeight="extrabold" fontSize="xl">
        Set 2023
      </Text>
      <IconButton aria-label="next" icon={<AiOutlineRight />} size="sm" />
    </Flex>
  );
}

function PeriodSelector() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<AiOutlineDown />} size="xs">
        Monthly
      </MenuButton>
      <MenuList bg="brand.600" borderColor="brand.400">
        <MenuItem
          bg="brand.600"
          color="brand.300"
          _hover={{ bg: 'transparent', color: 'brand.100' }}
        >
          Yearly
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

function FilterModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);

  return (
    <>
      <Button onClick={onOpen} rightIcon={<RiFilter3Line />} size="xs">
        Filter
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="6xl"
        finalFocusRef={finalRef}
      >
        <ModalOverlay />
        <ModalContent bg="brand.600" borderColor="brand.400" border="5px">
          <ModalHeader color="brand.200">Filter</ModalHeader>
          <ModalCloseButton color="brand.100" />
          <ModalBody>
            <Text color="brand.100">Ciaone</Text>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
}

export default function TopBar() {
  return (
    <Flex
      borderBottom="1px"
      borderColor="brand.400"
      justify="center"
      align="center"
      paddingLeft={2}
      bg="brand.600"
      flex="1 auto"
    >
      <FilterModal />
      <Spacer />
      <DateSelector />
      <PeriodSelector />
      <AddTransactionForm />
      <Spacer />
      <WindowsAction />
    </Flex>
  );
}
