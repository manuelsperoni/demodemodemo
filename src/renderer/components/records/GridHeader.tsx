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
  editFieldDescriptionAction,
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
          <Input
            color="brand.100"
            borderColor="transparent"
            padding={0}
            margin={0}
            value={field.description}
            width="70px"
            onChange={(e) => {
              dispatch(editFieldDescriptionAction(field.id, e.target.value));
            }}
          />
          <Menu width="50" height="50" closeOnSelect={false} preventOverflow>
            <MenuButton as={IconButton} icon={<BiDotsHorizontal />} />
            <MenuList>
              <MenuItem
                icon={<BiEdit />}
                onClick={() => dispatch(openEditFieldAction(field.id))}
              >
                Edit
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
          onClick={() => dispatch(addRecordAction())}
          icon={<BiPlus />}
          variant="ghost"
        />
      </Flex>
    </Flex>
  );
}
