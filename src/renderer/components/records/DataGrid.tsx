import {
  Grid,
  Flex,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Button,
  Flex,
  Text,
  IconButton,
  Menu,
  MenuList,
  MenuButton,
  Spacer,
} from '@chakra-ui/react';
import { useAppContext, useAppDispatch } from 'renderer/context/AppContext';
import { useRef, useState } from 'react';
import { addFieldOption, editFieldOption } from 'renderer/actions/Actions';
import { BiPlus, BiTrash } from 'react-icons/bi';
import GridHeader from './GridHeader';
import GridMain from './GridMain';

export default function DataGrid() {
  const state = useAppContext();
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fieldOption, setFieldOpiton] = useState('');
  const btnRef = useRef();
  return (
    <Flex direction="column">
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <GridHeader />
      <GridMain />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        bg="brand.600"
      >
        <DrawerOverlay />
        <DrawerContent bg="brand.600">
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Flex direction="column" gap="5" padding="0" marginBlock={4}>
              <Text color="brand.200" fontSize="xs" marginInline={5}>
                OPTIONS
              </Text>
              <Flex direction="column" gap="0" paddingBlock="0">
                <Flex direction="row">
                  <Input
                    color="brand.100"
                    width="100%"
                    borderColor="brand.400"
                    value={fieldOption}
                    borderRadius={0}
                    placeholder="option"
                    onChange={(e) => setFieldOpiton(e.target.value)}
                  />
                  <IconButton
                    aria-label="new option"
                    variant="menuItemRounded"
                    icon={<BiPlus />}
                    onClick={() =>
                      dispatch(addFieldOption('field.description', fieldOption))
                    }
                  />
                </Flex>

                {state.fields[0].values.map((value, index) => (
                  <Menu key={index} closeOnSelect={false} preventOverflow>
                    <MenuButton
                      w="100%"
                      h="40px"
                      color="brand.200"
                      borderRadius={5}
                      _hover={{ background: 'brand.300' }}
                    >
                      <Flex
                        align="center"
                        gap="5"
                        justify="left"
                        paddingInline={5}
                      >
                        {value}
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
                      <Input
                        color="brand.100"
                        width="100%"
                        borderColor="transparent"
                        value={value}
                        onChange={(e) =>
                          dispatch(
                            editFieldOption(
                              field.description,
                              value,
                              e.target.value
                            )
                          )
                        }
                      />
                      <Flex direction="column">
                        <Button
                          variant="menuItemRounded"
                          gap="5"
                          onClick={() =>
                            dispatch(
                              removeFieldOption(field.description, value)
                            )
                          }
                        >
                          <BiTrash /> Delete
                          <Spacer />
                        </Button>
                      </Flex>
                    </MenuList>
                  </Menu>
                ))}
              </Flex>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
