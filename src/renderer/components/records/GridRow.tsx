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
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { BiDotsHorizontalRounded, BiPlus, BiTrash } from 'react-icons/bi';
import { editRecord, removeRecord } from 'renderer/actions/Actions';
import { useAppContext, useAppDispatch } from 'renderer/context/AppContext';

export default function GridRow({ record }: any) {
  const state = useAppContext();
  const dispatch = useAppDispatch();

  useEffect(() => console.log('row remount'), []);
  return (
    <>
      {state.fields.map((field) => (
        <GridItem
          key={field.description}
          w="200px"
          h="50px"
          borderBottomWidth={1}
          borderColor="brand.400"
          borderRightWidth={1}
        >
          <Menu strategy="fixed">
            <MenuButton
              w="200px"
              h="50px"
              color="brand.200"
              _hover={{ background: 'brand.300' }}
            >
              {record[field.description]}
            </MenuButton>
            <MenuList
              bg="brand.500"
              borderColor="brand.300"
              padding={2}
              flexDirection="column"
              display="flex"
            >
              {field.values.map((value) => (
                <MenuItem
                  key={value}
                  onClick={() =>
                    dispatch(editRecord(field.description, record._id, value))
                  }
                >
                  <Button variant="menuItemRounded">{value}</Button>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </GridItem>
      ))}
      <GridItem
        w="50px"
        h="50px"
        borderBottomWidth={1}
        borderColor="brand.400"
        borderRightWidth={1}
      >
        <Menu strategy="fixed" closeOnSelect>
          <MenuButton
            w="50px"
            h="50px"
            color="brand.200"
            _hover={{ background: 'brand.300' }}
            display="flex"
            alignContent="center"
            justifyContent="center"
          >
            <BiDotsHorizontalRounded />
          </MenuButton>
          <MenuList
            bg="brand.500"
            borderColor="brand.300"
            padding={2}
            flexDirection="column"
            display="flex"
          >
            <Flex direction="column">
              <Button
                variant="menuItemRounded"
                gap="5"
                onClick={() => dispatch(removeRecord(record._id))}
              >
                <BiTrash /> Delete
                <Spacer />
              </Button>
            </Flex>
          </MenuList>
        </Menu>
      </GridItem>
    </>
  );
}
