import {
  Flex,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  Input,
  Box,
  Center,
  Stack,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';
import { TfiPlus } from 'react-icons/tfi';
import { useId, useRef, useState } from 'react';
import { useAppDispatch, useAppContext } from 'renderer/context/AppContext';
import { addTransaction } from 'renderer/actions/Actions';
import {
  CategoryType,
  SubcategoryType,
  UserType,
  DirectionType,
  TransactionType,
} from 'renderer/types/Types';
import subcategoryFromCategory from '../helper/Helper';

export default function AddTransactionForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  const toast = useToast();
  const dispatch = useAppDispatch();
  const state = useAppContext();

  const [description, setDescription] = useState<string>('');
  const [amount, setAmount] = useState<string>(0);
  const [user, setUser] = useState<UserType>({
    id: state.users[0].id,
    description: state.users[0].description,
  });
  const [category, setCategory] = useState<CategoryType>({
    id: state.categories[0].id,
    description: state.categories[0].description,
  });
  const [subcategory, setSubcategory] = useState<SubcategoryType>({
    id: null,
    description: null,
  });
  const [direction, setDirection] = useState<DirectionType>({
    id: '1',
    description: 'expense',
  });
  const [date, setDate] = useState<string>(
    new Date().toISOString().slice(0, 10)
  );
  const id = useId();

  function addTransactionHandler() {
    const newTransaction: TransactionType = {
      id,
      amount,
      userId: user.id,
      userDescription: user.description,
      description,
      categoryId: category.id,
      categoryDescription: category.description,
      subcategoryId: subcategory?.id,
      subcategoryDescription: subcategory?.description,
      creationDate: date,
      directionDescription: direction.description,
      directionId: direction.id,
    };
    dispatch(addTransaction(newTransaction));
    onClose();
    toast({
      title: 'Done',
      description: 'Transaction Added',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  }

  return (
    <>
      <Button
        rightIcon={<TfiPlus />}
        variant="accent"
        size="xs"
        onClick={onOpen}
      >
        Add
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="6xl"
        finalFocusRef={finalRef}
        isCentered
      >
        <ModalOverlay />
        <ModalContent bg="brand.600" borderColor="brand.400" border="5px">
          <ModalHeader color="brand.200">Add Transaction</ModalHeader>
          <ModalCloseButton color="brand.100" />
          <ModalBody>
            <Stack spacing={5}>
              <Box>
                <FormLabel color="brand.200">Date</FormLabel>
                <Input
                  borderColor="brand.400"
                  type="date"
                  color="brand.200"
                  value={date}
                  onChange={(event) => {
                    setDate(event.target.value);
                  }}
                />
              </Box>

              <Box>
                <FormLabel color="brand.200">Description</FormLabel>

                <Input
                  borderColor="brand.400"
                  color="brand.200"
                  onChange={(event) => setDescription(event.target.value)}
                  value={description}
                  placeholder="Description"
                />
              </Box>
              <Box>
                <FormLabel color="brand.200">Directions</FormLabel>
                <Flex flex="1 1 auto" wrap="wrap" gap={2}>
                  {state.directions.map((el) => (
                    <Center
                      key={el.id}
                      padding={2}
                      bg={
                        el.id === direction?.id ? 'brand.accent' : 'transparent'
                      }
                      borderColor="brand.400"
                      borderWidth={1}
                      _hover={{ bg: 'brand.400' }}
                      borderRadius={5}
                      onClick={() => {
                        setDirection({
                          id: el.id,
                          description: el.description,
                        });
                      }}
                    >
                      <Text
                        color={
                          el.id === direction?.id ? 'brand.100' : 'brand.300'
                        }
                        _hover={{ color: 'brand.100' }}
                      >
                        {el.description}
                      </Text>
                    </Center>
                  ))}
                </Flex>
              </Box>
              <Box>
                <FormLabel color="brand.200">Category</FormLabel>
                <Flex flex="1 1 auto" wrap="wrap" gap={2}>
                  {state.categories.map((el) => (
                    <Center
                      key={el.id}
                      padding={2}
                      bg={
                        el.id === category?.id ? 'brand.accent' : 'transparent'
                      }
                      borderColor="brand.400"
                      borderWidth={1}
                      _hover={{ bg: 'brand.400' }}
                      borderRadius={5}
                      onClick={() => {
                        setCategory({ id: el.id, description: el.description });
                        setSubcategory({
                          id: null,
                          description: null,
                        });
                      }}
                    >
                      <Text
                        color={
                          el.id === category?.id ? 'brand.100' : 'brand.300'
                        }
                        _hover={{ color: 'brand.100' }}
                      >
                        {el.description}
                      </Text>
                    </Center>
                  ))}
                </Flex>
              </Box>
              <Box>
                <FormLabel color="brand.200">Subcategory</FormLabel>
                {category != null && (
                  <Flex flex="1 1 auto" wrap="wrap" gap={2}>
                    {subcategoryFromCategory(state.categories, category.id).map(
                      (el) => (
                        <Center
                          key={el.id}
                          bg={
                            el.id === subcategory?.id
                              ? 'brand.accent'
                              : 'transparent'
                          }
                          padding={2}
                          borderColor="brand.400"
                          borderWidth={1}
                          _hover={{ bg: 'brand.400' }}
                          borderRadius={5}
                          onClick={() =>
                            setSubcategory({
                              id: el.id,
                              description: el.description,
                            })
                          }
                        >
                          <Text
                            color={
                              el.id === subcategory?.id
                                ? 'brand.100'
                                : 'brand.300'
                            }
                            _hover={{ color: 'brand.100' }}
                          >
                            {el.description}
                          </Text>
                        </Center>
                      )
                    )}
                  </Flex>
                )}
              </Box>
              <Box>
                <FormLabel color="brand.200">Amount</FormLabel>
                <InputGroup>
                  <Input
                    borderColor="brand.400"
                    color="brand.200"
                    type="number"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                  />
                  <InputRightElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    children="€"
                  />
                </InputGroup>
              </Box>
              <Box>
                <FormLabel color="brand.200">User</FormLabel>
                <Flex flex="1 1 auto" wrap="wrap" gap={2}>
                  {state.users.map((el, num) => (
                    <Center
                      key={el.id}
                      padding={2}
                      bg={el.id == user?.id ? 'brand.accent' : 'transparent'}
                      borderColor="brand.400"
                      borderWidth={1}
                      _hover={{ bg: 'brand.400' }}
                      borderRadius={5}
                      onClick={() =>
                        setUser({ id: el.id, description: el.description })
                      }
                    >
                      <Text
                        color={el.id === user?.id ? 'brand.100' : 'brand.300'}
                        _hover={{ color: 'brand.100' }}
                      >
                        {el.description}
                      </Text>
                    </Center>
                  ))}
                </Flex>
              </Box>
              <Button variant="accent" onClick={() => addTransactionHandler()}>
                Create
              </Button>
            </Stack>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
}
