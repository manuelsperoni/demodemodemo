import { GridItem, Menu, MenuButton, MenuList } from '@chakra-ui/react';

export default function RecordRowEmpty() {
  return (
    <>
      {[...Array(4)].map(() => (
        <GridItem
          w="200px"
          h="50px"
          borderBottomWidth={1}
          borderColor="brand.400"
          borderRightWidth={1}
        >
          <Menu strategy="fixed">
            <MenuButton
              w="200px"
              h="50px"
              color="brand.200"
              _hover={{ background: 'brand.300' }}
            >
              Field name
            </MenuButton>
            <MenuList bg="brand.500" borderColor="brand.300" padding={2}>
              {/* <RecordFieldUserRowMenu /> */}
            </MenuList>
          </Menu>
        </GridItem>
      ))}
    </>
  );
}
