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
import { TfiMinus, TfiLayoutWidthFull, TfiClose } from 'react-icons/tfi';
import { RiFilter3Line } from 'react-icons/ri';

function WindowsAction() {
  return (
    <Flex>
      <IconButton
        icon={<TfiMinus />}
        bg="transparent"
        color="brand.200"
        _hover={{ bg: 'transparent', color: 'brand.100' }}
      />
      <IconButton
        icon={<TfiLayoutWidthFull />}
        bg="transparent"
        color="brand.200"
        _hover={{ bg: 'transparent', color: 'brand.100' }}
      />
      <IconButton
        icon={<TfiClose />}
        bg="transparent"
        color="brand.200"
        _hover={{ bg: 'transparent', color: 'brand.100' }}
      />
    </Flex>
  );
}

function DateSelector() {
  return (
    <Flex justify="center" align="center">
      <IconButton
        icon={<AiOutlineLeft />}
        bg="transparent"
        color="brand.200"
        _hover={{ bg: 'transparent', color: 'brand.100' }}
      />
      <Text color="brand.200" fontWeight="extrabold">
        Set 2023
      </Text>
      <IconButton
        icon={<AiOutlineRight />}
        bg="transparent"
        color="brand.200"
        _hover={{ bg: 'transparent', color: 'brand.100' }}
      />
    </Flex>
  );
}

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
        Monthly
      </MenuButton>
      <MenuList bg="brand.700" borderColor="brand.400">
        <MenuItem
          bg="brand.700"
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
  return (
    <>
      <Button
        onClick={onOpen}
        rightIcon={<RiFilter3Line />}
        bg="brand.400"
        color="brand.300"
        _hover={{ bg: 'brand.400', color: 'brand.100' }}
        size="xs"
      >
        Filter
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bg="brand.700" borderColor="brand.400" border="5px">
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

export default function CCTopBar() {
  return (
    <Flex
      height="40px"
      borderBottom="1px"
      borderColor="brand.400"
      justify="center"
      align="center"
      paddingInline={2}
      bg="brand.700"
    >
      <FilterModal />
      <Spacer />
      <DateSelector />
      <PeriodSelector />
      <Spacer />
      <WindowsAction />
    </Flex>
  );
}
