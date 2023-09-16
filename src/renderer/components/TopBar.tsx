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
      <IconButton icon={<TfiMinus />} variant="customGhost" borderRadius={0} />
      <IconButton
        icon={<TfiLayoutWidthFull />}
        variant="customGhost"
        borderRadius={0}
      />
      <IconButton icon={<TfiClose />} variant="customGhost" borderRadius={0} />
    </Flex>
  );
}

function DateSelector() {
  return (
    <Flex justify="center" align="center" gap="5">
      <IconButton icon={<AiOutlineLeft />} variant="customGhost" size="sm" />
      <Text color="brand.100" fontWeight="extrabold" fontSize="xl">
        Set 2023
      </Text>
      <IconButton icon={<AiOutlineRight />} variant="customGhost" size="sm" />
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
        variant="customGhost"
      >
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
  return (
    <>
      <Button
        onClick={onOpen}
        rightIcon={<RiFilter3Line />}
        variant="customGhost"
        size="xs"
      >
        Filter
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
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
      height="40px"
      borderBottom="1px"
      borderColor="brand.400"
      justify="center"
      align="center"
      paddingLeft={2}
      bg="brand.600"
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
