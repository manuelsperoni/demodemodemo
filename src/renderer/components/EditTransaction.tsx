import {
  Flex,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
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
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppContext } from 'renderer/context/AppContext';
import {
  closeEditTransactionAction,
  editTransactionAction,
} from 'renderer/actions/Actions';
import { TransactionType } from 'renderer/types/Types';
import subcategoryFromCategory from '../helper/Helper';

export default function EditTransaction(transaction: TransactionType) {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const state = useAppContext();

  const [id, setId] = useState<string>(transaction.id);
  const [description, setDescription] = useState<string>(
    transaction.description
  );
  const [amount, setAmount] = useState<string>(transaction.amount);
  const [userDescription, setUserDescription] = useState<string>(
    transaction.userDescription
  );
  const [userId, setUserId] = useState<string>(transaction.userId);

  const [categoryDescription, setCategoryDescription] = useState<string>(
    transaction.categoryDescription
  );
  const [categoryId, setCategoryId] = useState<string>(transaction.categoryId);
  const [subcategoryDescription, setSubcategoryDescription] = useState<
    string | null
  >(transaction.subcategoryDescription);
  const [subcategoryId, setSubcategoryId] = useState<string | null>(
    transaction.subcategoryId
  );

  const [directionDescription, setDirectionDescription] = useState<string>(
    transaction.directionDescription
  );
  const [directionId, setDirectionId] = useState<string>(
    transaction.directionId
  );
  const [date, setDate] = useState<string>(transaction.date);

  useEffect(() => {
    if (state.selectedTransaction) {
      setId(state.selectedTransaction.id);
      setAmount(state.selectedTransaction.amount);
      setUserId(state.selectedTransaction.userId);
      setUserDescription(state.selectedTransaction.userDescription);
      setDescription(state.selectedTransaction.description);
      setCategoryId(state.selectedTransaction.categoryId);
      setCategoryDescription(state.selectedTransaction.categoryDescription);
      setSubcategoryId(state.selectedTransaction.subcategoryId);
      setSubcategoryDescription(
        state.selectedTransaction.subcategoryDescription
      );
      setDate(state.selectedTransaction.date);
      setDirectionDescription(state.selectedTransaction.directionDescription);
      setDirectionId(state.selectedTransaction.directionId);
    }
  }, [state]);

  function editTransaction() {
    dispatch(
      editTransactionAction({
        id,
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

    toast({
      title: 'Done',
      description: 'Save done',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  }

  return (
    <Modal
      isOpen={state.editTransactionOpened}
      onClose={() => dispatch(closeEditTransactionAction())}
      size="xl"
      isCentered
    >
      <ModalOverlay />
      <ModalContent bg="brand.600" borderColor="brand.400" border="5px">
        <ModalHeader color="brand.200">Edit transaction</ModalHeader>
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
                    bg={el.id === directionId ? 'brand.accent' : 'transparent'}
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
                      color={el.id === directionId ? 'brand.100' : 'brand.300'}
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
                          el.id === subcategoryId ? 'brand.accent' : 'brand.300'
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
            <Button variant="accent" onClick={editTransaction}>
              Save
            </Button>
          </Stack>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
}
