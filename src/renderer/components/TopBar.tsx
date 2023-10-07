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
} from '@chakra-ui/react';
import { AiOutlineDown, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import {
  TfiMinus,
  TfiLayoutWidthFull,
  TfiClose,
  TfiPlus,
} from 'react-icons/tfi';
import { RiFilter3Line } from 'react-icons/ri';
import { useId, useRef } from 'react';
import {
  useAppDispatch,
  AppAction,
  TransactionFlow,
} from 'renderer/context/AppContext';

function WindowsAction() {
  return (
    <Flex>
      <IconButton icon={<TfiMinus />} borderRadius={0} />
      <IconButton icon={<TfiLayoutWidthFull />} borderRadius={0} />
      <IconButton icon={<TfiClose />} borderRadius={0} />
    </Flex>
  );
}

function DateSelector() {
  return (
    <Flex justify="center" align="center" gap="5">
      <IconButton icon={<AiOutlineLeft />} size="sm" />
      <Text color="brand.100" fontWeight="extrabold" fontSize="xl">
        Set 2023
      </Text>
      <IconButton icon={<AiOutlineRight />} size="sm" />
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
  const dispatch = useAppDispatch();
  function addtransaction() {
    dispatch({
      type: AppAction.ADD_TRANSACTION,
      payload: {
        id: '123',
        amount: 33,
        userId: 123,
        userName: 'Manuel',
        description: 'ciaone',
        cateogryId: 32,
        category: 'Bollette',
        subcategoryId: 21,
        subcategory: 'Gas',
        creationDate: Date.now(),
        flow: TransactionFlow.EXPENSE,
      },
    });
  }

  return (
    <Flex
      height="50px"
      borderBottom="1px"
      borderColor="brand.400"
      justify="center"
      align="center"
      paddingLeft={2}
      bg="brand.600"
      grow={1}
    >
      <FilterModal />
      <Spacer />
      <DateSelector />
      <PeriodSelector />
      <Button
        rightIcon={<TfiPlus />}
        variant="accent"
        size="xs"
        onClick={addtransaction}
      >
        Add
      </Button>
      <Spacer />
      <WindowsAction />
    </Flex>
  );
}
