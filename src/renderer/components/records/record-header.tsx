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
  MenuDivider,
  VStack,
} from '@chakra-ui/react';
import { AiOutlineEllipsis } from 'react-icons/ai';
import {
  BiArrowFromRight,
  BiArrowToBottom,
  BiArrowToTop,
  BiCalendar,
  BiData,
  BiRightArrow,
  BiRuler,
  BiText,
  BiTrash,
  BiUser,
  BiUserCircle,
} from 'react-icons/bi';
import { useAppContext } from 'renderer/context/AppContext';
import { AvailableFieldEnum, FieldType } from 'renderer/types/Types';

function MenuType(field: FieldType) {
  switch (field.type) {
    case AvailableFieldEnum.USER:
      return (
        <>
          {el.values.map((el) => (
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
                  <MenuList bg="brand.500" borderColor="brand.300" padding={5}>
                    <Input />
                  </MenuList>
                </Menu>
              </Flex>
            </MenuItem>
          ))}
        </>
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
        >
          {/* Main */}
          <Menu closeOnSelect={false} preventOverflow>
            <MenuButton
              w="200px"
              h="50px"
              color="brand.100"
              _hover={{ background: 'brand.400' }}
            >
              <Flex align="center" gap="5" justify="left" paddingInline={5}>
                <BiUser color="brand.200" />
                {el.description}
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
              {/* NAME */}
              <Flex height="40px" align="center" justify="start">
                <Input
                  color="brand.100"
                  width="100%"
                  borderColor="transparent"
                  value={el.description}
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
                  <Flex direction="column" gap="2" padding="0" marginBlock={4}>
                    <Text color="brand.200" fontSize="xs" marginInline={5}>
                      TYPE
                    </Text>
                    <Flex direction="column" gap="0">
                      <Button variant="menuItem" gap="5">
                        <BiUser color="brand.100" /> User
                        <Spacer />
                      </Button>
                      <Button variant="menuItem" gap="5">
                        <BiText color="brand.100" /> Text
                        <Spacer />
                      </Button>
                      <Button variant="menuItem" gap="5">
                        <BiRuler color="brand.100" /> Measure
                        <Spacer />
                      </Button>
                      <Button
                        variant="menuItem"
                        gap="5"
                        bg={true ? 'brand.300' : 'none'}
                        color={true ? 'brand.100' : 'brand.200'}
                      >
                        <BiCalendar color="brand.100" /> Date
                        <Spacer />
                      </Button>
                    </Flex>
                  </Flex>
                  <Divider borderColor="brand.300" />
                  <Flex direction="column" gap="2" padding="0" marginBlock={4}>
                    <Text color="brand.200" fontSize="xs" marginInline={5}>
                      OPTIONS
                    </Text>
                    <Flex direction="column" gap="0" paddingBlock="0">
                      <Button variant="menuItem">
                        User
                        <Spacer />
                      </Button>
                      <Button variant="menuItem" gap="5">
                        Text
                        <Spacer />
                      </Button>
                      <Button variant="menuItem" gap="5">
                        Measure
                        <Spacer />
                      </Button>
                      <Button
                        variant="menuItem"
                        gap="5"
                        bg={true ? 'brand.accent' : 'none'}
                        color={true ? 'brand.100' : 'brand.200'}
                      >
                        Date
                        <Spacer />
                      </Button>
                    </Flex>
                  </Flex>
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
                <Button variant="menuItem" gap="5">
                  <BiTrash /> delete
                  <Spacer />
                </Button>
              </Flex>
            </MenuList>
          </Menu>
        </GridItem>
      ))}
    </>
  );
}
