import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  GridItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Flex,
  Avatar,
  Button,
  Spacer,
  Input,
  IconButton,
} from '@chakra-ui/react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { useAppContext } from 'renderer/context/AppContext';
import { AvailableFieldEnum, FieldType } from 'renderer/types/Types';

function MenuType(field: FieldType) {
  switch (field.type) {
    case AvailableFieldEnum.USER:
      return (
        <Flex gap="10px" direction="column">
          <Text color="brand.200">NAME</Text>
          <Input />
          <Text color="brand.200">TYPE</Text>
          <Text color="brand.200">VALUES</Text>
          <Flex gap="3px" direction="column">
            {field.values.map((el) => (
              <MenuItem
                borderRadius="10px"
                bg="transparent"
                color="brand.300"
                _hover={{ background: 'brand.300' }}
              >
                <Flex justify="left" align="center" gap="2" flex="1 1 auto">
                  <Flex gap="10px">
                    <Avatar name={el} size="xs" />
                    <Text color="brand.200">{el}</Text>
                  </Flex>
                  <Spacer />
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      icon={<AiOutlineEllipsis size="30px" />}
                      color="brand.200"
                      _hover={{ color: 'brand.100' }}
                    />
                    <MenuList
                      bg="brand.500"
                      borderColor="brand.300"
                      padding={5}
                    >
                      <Input />
                    </MenuList>
                  </Menu>
                </Flex>
              </MenuItem>
            ))}
          </Flex>
        </Flex>
      );
    default:
      return <Text>None</Text>;
  }
}

export default function RecordHeader() {
  const state = useAppContext();
  return (
    <>
      {state.fields.map((el) => (
        <GridItem
          w="200px"
          h="50px"
          borderBottomWidth={1}
          borderColor="brand.400"
          borderRightWidth={1}
          bg="brand.300"
        >
          <Menu closeOnSelect={false}>
            <MenuButton
              w="200px"
              h="50px"
              color="brand.200"
              _hover={{ background: 'brand.400' }}
            >
              {el.description}
            </MenuButton>
            <MenuList bg="brand.500" borderColor="brand.300" padding={5}>
              {MenuType(el)}
            </MenuList>
          </Menu>
        </GridItem>
      ))}
    </>
  );
}
