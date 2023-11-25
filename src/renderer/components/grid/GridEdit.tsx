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
import {
  addFieldOptionAction,
  closeEditFieldAction,
  editFieldDescriptionAction,
  editFieldOptionAction,
  removeFieldAction,
  removeFieldOptionAction,
} from 'renderer/store/actions';
import { useAppContext, useAppDispatch } from 'renderer/store/AppContext';

export default function GridEdit() {
  const state = useAppContext();
  const dispatch = useAppDispatch();
  const [newOptionDescription, setNewOptionDescription] = useState('');
  const selectedField =
    state.fields[
      state.fields.findIndex((el) => el.id == state.selectedFieldId)
    ];

  return (
    <Drawer
      isOpen={state.selectedFieldId}
      placement="right"
      // onClose={() => {dispatch}}
      bg="brand.600"
      onClose={() => dispatch(closeEditFieldAction())}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent bg="brand.600">
        <DrawerCloseButton />
        <DrawerHeader color="brand.100">Edit field</DrawerHeader>

        <DrawerBody>
          {state.selectedFieldId && (
            <Flex direction="column" gap="5" padding="0" marginBlock={4}>
              <Text color="brand.200" fontSize="xs" marginInline={5}>
                OPTIONS
              </Text>
              <Flex direction="column" gap="0" paddingBlock="0">
                <Input
                  color="brand.100"
                  value={selectedField.description}
                  onChange={(e) => {
                    console.log(`suca${state}`);
                    dispatch(
                      editFieldDescriptionAction(
                        state.selectedFieldId,
                        e.target.value
                      )
                    );
                  }}
                />
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
                      dispatch(
                        addFieldOptionAction(
                          state.selectedFieldId,
                          newOptionDescription
                        )
                      );
                    }}
                  />
                </Flex>

                {selectedField.values.map((value) => (
                  <Menu key={value} closeOnSelect={false} preventOverflow>
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
                            editFieldOptionAction(
                              selectedField.id,
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
                              removeFieldOptionAction(selectedField.id, value)
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
          )}
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
