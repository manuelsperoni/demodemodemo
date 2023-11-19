import {
  Menu,
  MenuButton,
  MenuList,
  Text,
  Flex,
  Spacer,
  Input,
  Divider,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import {
  BiArrowToBottom,
  BiArrowToTop,
  BiCalendar,
  BiRuler,
  BiText,
  BiTrash,
  BiUser,
} from 'react-icons/bi';
import { FieldType } from 'renderer/types/Types';
import { useAppDispatch } from 'renderer/context/AppContext';
import { removeField, editFieldDescription } from 'renderer/actions/Actions';
import GridHeaderSubMenu from './GridHeaderSubMenu';

export default function GridHeaderMenu({ field }) {
  const dispatch = useAppDispatch();

  return (
    <>
      {/* NAME */}
      <Flex height="40px" align="center" justify="start">
        <Input
          color="brand.100"
          width="100%"
          borderColor="transparent"
          value={field.description}
          onClick={(e) =>
            dispatch(editFieldDescription(field.description, e.target.value))
          }
        />
      </Flex>
      <Divider borderColor="brand.300" />
      {/* EDIT */}
      <Menu closeOnSelect={false} placement="right">
        <MenuButton
          w="100%"
          h="40px"
          color="brand.200"
          _hover={{ background: 'brand.300' }}
        >
          <Flex align="center" gap="5" paddingInline={5}>
            <BiUser /> Edit field
            <Spacer />
          </Flex>
        </MenuButton>
        <MenuList
          bg="brand.500"
          borderColor="brand.300"
          padding={0}
          overflow="hidden"
          flexDirection="column"
          display="flex"
        >
          <GridHeaderSubMenu field={field} />
        </MenuList>
      </Menu>
      <Divider borderColor="brand.300" />
      {/* SORT */}
      <Flex direction="column">
        <Button variant="menuItem" gap="5">
          <BiArrowToBottom color="brand.100" /> Sort desc
          <Spacer />
        </Button>
        <Button variant="menuItem" gap="5">
          <BiArrowToTop color="brand.100" /> Sort asc
          <Spacer />
        </Button>
        <Divider borderColor="brand.300" />
      </Flex>
      {/* DELETE */}
      <Flex direction="column">
        <Button
          variant="menuItem"
          gap="5"
          onClick={() => dispatch(removeField(field.description))}
        >
          <BiTrash /> delete
          <Spacer />
        </Button>
      </Flex>
    </>
  );
}
