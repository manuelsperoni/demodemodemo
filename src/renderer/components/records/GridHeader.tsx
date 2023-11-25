import {
  GridItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Flex,
  Avatar,
  Spacer,
  Input,
  IconButton,
  Divider,
  Button,
  Grid,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Icon,
} from '@chakra-ui/react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import {
  BiArrowToBottom,
  BiArrowToTop,
  BiCalendar,
  BiDotsHorizontal,
  BiEdit,
  BiPlus,
  BiRuler,
  BiText,
  BiTrash,
  BiUser,
} from 'react-icons/bi';
import { useAppContext, useAppDispatch } from 'renderer/context/AppContext';
import {
  addRecord,
  editFieldDescription,
  openEditFieldAction,
  removeFieldAction,
} from 'renderer/actions/Actions';
import { useState } from 'react';

export default function GridHeader() {
  const state = useAppContext();
  const dispatch = useAppDispatch();

  return (
    <Flex direction="row" borderBottomWidth={1} borderColor="brand.400">
      {state.fields.map((field, index) => (
        <Flex
          key={field.id}
          direction="row"
          flex="0 0 200px"
          justify="space-evenly"
          align="center"
          borderRightWidth={1}
          borderColor="brand.400"
        >
          <Icon as={BiUser} color="brand.100" />
          <Text color="brand.200">{field.description}</Text>
          <Menu width="50" height="50" closeOnSelect={false} preventOverflow>
            <MenuButton as={IconButton} icon={<BiDotsHorizontal />} />
            <MenuList>
              <MenuItem
                icon={<BiEdit />}
                onClick={() => dispatch(openEditFieldAction(field))}
              >
                Edit
                {/* <Menu closeOnSelect={false} placement="right">
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
              </Menu> */}
              </MenuItem>
              <MenuItem icon={<BiArrowToBottom />}>Sort desc </MenuItem>
              <MenuItem icon={<BiArrowToTop />}>Sort asc </MenuItem>
              <MenuItem
                onClick={() => dispatch(removeFieldAction(field.id))}
                icon={<BiTrash />}
              >
                delete
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ))}
      <Flex height="50" flex="0 0 100px" justify="center" align="center">
        <IconButton
          aria-label="add record"
          onClick={() => dispatch(addRecord())}
          icon={<BiPlus />}
          variant="ghost"
        />
      </Flex>
    </Flex>
  );
}
