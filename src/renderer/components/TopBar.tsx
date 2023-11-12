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
  Avatar,
} from '@chakra-ui/react';
import { AiOutlineDown, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import {
  TfiMinus,
  TfiLayoutWidthFull,
  TfiClose,
  TfiPlus,
} from 'react-icons/tfi';
import { RiFilter3Line } from 'react-icons/ri';
import { useRef } from 'react';
import { useAppContext, useAppDispatch } from 'renderer/context/AppContext';
import { TimeSpanEnum } from 'renderer/types/Types';
import {
  nextTimeSpanAction,
  previousTimeSpanAction,
  selectMonthlyTimeSpanAction,
  selectUserAction,
  selectYearlyTimeSpanAction,
} from 'renderer/actions/Actions';
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
  const dispatch = useAppDispatch();
  const state = useAppContext();
  const monthLabel = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return (
    <Flex justify="center" align="center" gap="5">
      <IconButton
        aria-label="previous"
        icon={<AiOutlineLeft />}
        size="sm"
        onClick={() => dispatch(previousTimeSpanAction())}
      />
      <Text color="brand.100" fontWeight="extrabold" fontSize="xl">
        {state.timespan == TimeSpanEnum.MONTHLY
          ? `${monthLabel[state.filter.month]} ${state.filter.year}`
          : state.filter.year}
      </Text>
      <IconButton
        aria-label="next"
        icon={<AiOutlineRight />}
        size="sm"
        onClick={() => dispatch(nextTimeSpanAction())}
      />
    </Flex>
  );
}

function PeriodSelector() {
  const dispatch = useAppDispatch();
  const state = useAppContext();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<AiOutlineDown />} size="xs">
        {state.timespan == TimeSpanEnum.MONTHLY ? 'Monthly' : 'Yearly'}
      </MenuButton>
      <MenuList bg="brand.600" borderColor="brand.400">
        <MenuItem
          bg="brand.600"
          color="brand.300"
          _hover={{ bg: 'transparent', color: 'brand.100' }}
          onClick={() => {
            if (state.timespan === TimeSpanEnum.MONTHLY)
              dispatch(selectYearlyTimeSpanAction());
            else dispatch(selectMonthlyTimeSpanAction());
          }}
        >
          {state.timespan == TimeSpanEnum.MONTHLY ? 'Yearly' : 'Monthly'}
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

function FilterModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  const dispatch = useAppDispatch();
  const state = useAppContext();

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
            <Flex flex="1 1 auto" wrap="wrap" gap={2}>
              {state.users.map((el, num) => (
                <Flex
                  align="center"
                  gap={2}
                  key={el.id}
                  padding={2}
                  bg={el.id === state.user.id ? 'brand.accent' : 'transparent'}
                  borderColor="brand.400"
                  borderWidth={1}
                  _hover={{ bg: 'brand.400' }}
                  borderRadius={1000}
                  paddingInline={2}
                  onClick={() => {
                    dispatch(selectUserAction(el));
                  }}
                >
                  <Avatar size="sm" name={el.description} />
                  <Text
                    color={el.id === state.user.id ? 'brand.100' : 'brand.300'}
                    _hover={{ color: 'brand.100' }}
                  >
                    {el.description}
                  </Text>
                </Flex>
              ))}
            </Flex>
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
      flex="0 0 50px"
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
