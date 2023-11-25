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
  MenuDivider,
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
import { useAppContext, useAppDispatch } from 'renderer/store/AppContext';
import {
  editFieldDescriptionAction,
  openEditFieldAction,
  removeFieldAction,
} from 'renderer/store/actions';
import { useState } from 'react';

export default function GridHeader() {
  const state = useAppContext();
  const dispatch = useAppDispatch();
  const [tmpFieldDescription, setTmpFieldDescription] = useState('');

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
          <Menu
            closeOnSelect={false}
            preventOverflow
            onOpen={() => setTmpFieldDescription(field.description)}
            onClose={() =>
              dispatch(
                editFieldDescriptionAction(field.id, tmpFieldDescription)
              )
            }
          >
            <MenuButton
              w="200px"
              h="50px"
              as={Button}
              leftIcon={<BiUser />}
              borderRadius={0}
            >
              {field.description}
            </MenuButton>
            <MenuList>
              <Input
                value={tmpFieldDescription}
                onChange={(e) => setTmpFieldDescription(e.target.value)}
              />
              <MenuDivider />
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
