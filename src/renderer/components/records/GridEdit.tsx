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
import { useState } from 'react';
import { BiPlus, BiTrash } from 'react-icons/bi';
import { addFieldOption } from 'renderer/actions/Actions';
import { useAppContext, useAppDispatch } from 'renderer/context/AppContext';

export default function GridEdit() {
  const state = useAppContext();
  const dispatch = useAppDispatch();
  const [newOptionDescription, setNewOptionDescription] = useState('');

  return (
    <Drawer
      isOpen={state.fieldOnEdit}
      placement="right"
      // onClose={() => {dispatch}}
      bg="brand.600"
    >
      <DrawerOverlay />
      <DrawerContent bg="brand.600">
        <DrawerCloseButton />
        <DrawerHeader color="brand.100">Edit field</DrawerHeader>

        <DrawerBody>
          <Flex direction="column" gap="5" padding="0" marginBlock={4}>
            <Text color="brand.200" fontSize="xs" marginInline={5}>
              OPTIONS
            </Text>
            <Flex direction="column" gap="0" paddingBlock="0">
              {/* <Input
                color="brand.100"
                width="100%"
                borderColor="transparent"
                value={state.fieldOnEdit.description}
                onChange={(e) => setFieldDescription(e.target.value)}
              /> */}
              <Flex direction="row">
                <Input
                  color="brand.100"
                  width="100%"
                  borderColor="brand.400"
                  value={newOptionDescription}
                  borderRadius={0}
                  placeholder="option"
                  onChange={(e) => setNewOptionDescription(e.target.value)}
                />
                <IconButton
                  aria-label="new option"
                  variant="menuItemRounded"
                  icon={<BiPlus />}
                  onClick={() => {
                    console.log(
                      state.fieldOnEdit.description,
                      '  ',
                      newOptionDescription
                    );
                    dispatch(
                      addFieldOption(
                        state.fieldOnEdit.description,
                        newOptionDescription
                      )
                    );
                  }}
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
                            state.fieldOnEdit.description,
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
                            removeFieldOption(
                              state.fieldOnEdit.description,
                              value
                            )
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
          <Button variant="outline" mr={3}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
