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
} from '@chakra-ui/react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import {
  BiArrowToBottom,
  BiArrowToTop,
  BiCalendar,
  BiPlus,
  BiRuler,
  BiText,
  BiTrash,
  BiUser,
} from 'react-icons/bi';
import { useAppContext, useAppDispatch } from 'renderer/context/AppContext';
import { AvailableFieldEnum, FieldType } from 'renderer/types/Types';
import { addRecord, editFieldDescription } from 'renderer/actions/Actions';
import { useState } from 'react';
import GridHeaderMenu from './GridHeaderMenu';
import GridHeaderSubMenu from './GridHeaderSubMenu';

export default function GridHeader() {
  const state = useAppContext();
  const dispatch = useAppDispatch();
  const [fieldDescription, setFieldDescription] = useState('');

  return (
    <Grid
      templateColumns={`repeat(${state.fields.length + 1}, 0fr)`}
      gap={0}
      autoFlow="unset"
      borderWidth={1}
      borderColor="brand.400"
    >
      {state.fields.map((field, index) => (
        <GridItem
          key={index}
          w="200px"
          h="50px"
          borderBottomWidth={1}
          borderColor="brand.400"
          borderRightWidth={1}
        >
          {/* Main */}
          <Menu
            closeOnSelect={false}
            preventOverflow
            onOpen={() => setFieldDescription(field.description)}
            onClose={() => {
              fieldDescription != field.description
                ? dispatch(
                    editFieldDescription(field.description, fieldDescription)
                  )
                : null;
            }}
          >
            <MenuButton
              w="200px"
              h="50px"
              color="brand.100"
              _hover={{ background: 'brand.400' }}
            >
              <Flex align="center" gap="5" justify="left" paddingInline={5}>
                <BiUser color="brand.200" />
                {field.description}
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
              <Flex height="40px" align="center" justify="start">
                <Input
                  color="brand.100"
                  width="100%"
                  borderColor="transparent"
                  value={fieldDescription}
                  onChange={(e) => setFieldDescription(e.target.value)}
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
            </MenuList>
          </Menu>
        </GridItem>
      ))}
      <GridItem
        h="50px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <IconButton
          aria-label="add record"
          onClick={() => dispatch(addRecord())}
          icon={<BiPlus />}
          variant="ghost"
        />
      </GridItem>
    </Grid>
  );
}
