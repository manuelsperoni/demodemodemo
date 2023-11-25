import {
  GridItem,
  Menu,
  MenuButton,
  MenuList,
  Flex,
  Button,
  Text,
  MenuItem,
  IconButton,
  Spacer,
  effect,
  Grid,
  Avatar,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { BiDotsHorizontalRounded, BiPlus, BiTrash } from 'react-icons/bi';
import { editRecordAction, removeRecordAction } from 'renderer/store/actions';
import { useAppContext, useAppDispatch } from 'renderer/store/AppContext';

export default function GridRow({ record }: any) {
  const state = useAppContext();
  const dispatch = useAppDispatch();

  return (
    <Flex direction="row" borderBottomWidth={1} borderColor="brand.400">
      {state.fields.map((field) => (
        <Flex borderRightWidth={1} borderColor="brand.400">
          <Menu strategy="fixed" isLazy>
            <MenuButton w="200px" h="50px">
              {record[field.description]}
            </MenuButton>
            <MenuList>
              {field.values.map((value) => (
                <MenuItem
                  key={value}
                  onClick={() =>
                    dispatch(
                      editRecordAction(field.description, record.id, value)
                    )
                  }
                >
                  <Avatar name={value} mr="12px" size="sm" />
                  <Text>{value}</Text>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      ))}
      <Flex height="50" flex="0 0 100px" justify="center" align="center">
        <Menu strategy="fixed" closeOnSelect>
          <MenuButton as={IconButton} icon={<BiDotsHorizontalRounded />} />
          <MenuList>
            <MenuItem
              icon={<BiTrash />}
              onClick={() => dispatch(removeRecordAction(record.id))}
            >
              Delete
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
