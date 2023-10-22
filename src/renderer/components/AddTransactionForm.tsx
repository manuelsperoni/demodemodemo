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
  Avatar,
  Divider,
} from '@chakra-ui/react';
import { TfiPlus } from 'react-icons/tfi';
import { useId, useRef, useState } from 'react';
import { useAppDispatch, useAppContext } from 'renderer/context/AppContext';
import { addTransactionAction } from 'renderer/actions/Actions';
import { v4 as uuidv4 } from 'uuid';
import subcategoryFromCategory from '../helper/Helper';

export default function AddTransactionForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  const toast = useToast();
  const dispatch = useAppDispatch();
  const state = useAppContext();

  const [description, setDescription] = useState<string>('');
  const [amount, setAmount] = useState<string>(0);
  const [userDescription, setUserDescription] = useState<string>(
    state.users[0].description
  );
  const [userId, setUserId] = useState<string>(state.users[0].id);

  const [categoryDescription, setCategoryDescription] = useState<string>(
    state.categories[0].description
  );
  const [categoryId, setCategoryId] = useState<string>(state.categories[0].id);
  const [subcategoryDescription, setSubcategoryDescription] = useState<
    string | null
  >(null);
  const [subcategoryId, setSubcategoryId] = useState<string | null>(null);

  const [directionDescription, setDirectionDescription] =
    useState<string>('expense');
  const [directionId, setDirectionId] = useState<string>('1');
  const [date, setDate] = useState<string>(
    new Date().toISOString().slice(0, 10)
  );
  const id = useId();

  function addTransaction() {
    dispatch(
      addTransactionAction({
        id: uuidv4(),
        amount,
        userId,
        userDescription,
        description,
        categoryId,
        categoryDescription,
        subcategoryId,
        subcategoryDescription,
        date,
        directionDescription,
        directionId,
      })
    );
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
        size="xl"
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
              <Divider borderColor="brand.400" />
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
              <Divider borderColor="brand.400" />
              <Box>
                <FormLabel color="brand.200">Directions</FormLabel>
                <Flex flex="1 1 auto" wrap="wrap" gap={2}>
                  {state.directions.map((el) => (
                    <Center
                      key={el.id}
                      padding={2}
                      bg={
                        el.id === directionId ? 'brand.accent' : 'transparent'
                      }
                      borderColor="brand.400"
                      borderWidth={1}
                      _hover={{ bg: 'brand.400' }}
                      borderRadius={10}
                      paddingInline={10}
                      onClick={() => {
                        setDirectionDescription(el.description);
                        setDirectionId(el.id);
                      }}
                    >
                      <Text
                        color={
                          el.id === directionId ? 'brand.100' : 'brand.300'
                        }
                        _hover={{ color: 'brand.100' }}
                      >
                        {el.description}
                      </Text>
                    </Center>
                  ))}
                </Flex>
              </Box>
              <Divider borderColor="brand.400" />
              <Box>
                <FormLabel color="brand.200">Category</FormLabel>
                <Flex flex="1 1 auto" wrap="wrap" gap={2}>
                  {state.categories.map((el) => (
                    <Center
                      key={el.id}
                      padding={2}
                      bg={el.id === categoryId ? 'brand.accent' : 'transparent'}
                      borderColor="brand.400"
                      borderWidth={1}
                      _hover={{ bg: 'brand.400' }}
                      borderRadius={10}
                      paddingInline={10}
                      onClick={() => {
                        setCategoryDescription(el.description);
                        setCategoryId(el.id);
                        setSubcategoryDescription(null);
                        setSubcategoryId(null);
                      }}
                    >
                      <Text
                        color={el.id === categoryId ? 'brand.100' : 'brand.300'}
                        _hover={{ color: 'brand.100' }}
                      >
                        {el.description}
                      </Text>
                    </Center>
                  ))}
                </Flex>
              </Box>
              <Box marginLeft={10}>
                <FormLabel color="brand.200">Subcategory</FormLabel>
                <Flex flex="1 1 auto" wrap="wrap" gap={2}>
                  {subcategoryFromCategory(state.categories, categoryId).map(
                    (el) => (
                      <Center
                        key={el.id}
                        borderColor={
                          el.id === subcategoryId ? 'brand.accent' : 'brand.400'
                        }
                        _hover={{ borderColor: 'brand.300' }}
                        bg="transparent"
                        padding={2}
                        borderWidth={1}
                        borderRadius={10}
                        paddingInline={10}
                        onClick={() => {
                          setSubcategoryDescription(el.description);
                          setSubcategoryId(el.id);
                        }}
                      >
                        <Text
                          color={
                            el.id === subcategoryId
                              ? 'brand.accent'
                              : 'brand.300'
                          }
                          _hover={{ color: 'brand.300' }}
                        >
                          {el.description}
                        </Text>
                      </Center>
                    )
                  )}
                </Flex>
              </Box>
              <Divider borderColor="brand.400" />
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
              <Divider borderColor="brand.400" />
              <Box>
                <FormLabel color="brand.200">User</FormLabel>
                <Flex flex="1 1 auto" wrap="wrap" gap={2}>
                  {state.users.map((el, num) => (
                    <Flex
                      align="center"
                      gap={2}
                      key={el.id}
                      padding={2}
                      bg={el.id == userId ? 'brand.accent' : 'transparent'}
                      borderColor="brand.400"
                      borderWidth={1}
                      _hover={{ bg: 'brand.400' }}
                      borderRadius={1000}
                      paddingInline={2}
                      onClick={() => {
                        setUserDescription(el.description);
                        setUserId(el.id);
                      }}
                    >
                      <Avatar size="sm" name={el.description} />
                      <Text
                        color={el.id === userId ? 'brand.100' : 'brand.300'}
                        _hover={{ color: 'brand.100' }}
                      >
                        {el.description}
                      </Text>
                    </Flex>
                  ))}
                </Flex>
              </Box>
              <Button variant="accent" onClick={() => addTransaction()}>
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
