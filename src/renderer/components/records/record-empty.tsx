import {
  GridItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from '@chakra-ui/react';
import { useAppContext } from 'renderer/context/AppContext';

export default function RecordEmpty() {
  const state = useAppContext();
  return (
    <>
      {[...Array(state.fields.length)].map(() => (
        <GridItem
          w="200px"
          h="50px"
          borderBottomWidth={1}
          borderColor="brand.400"
          borderRightWidth={1}
        >
          <Menu>
            <MenuButton
              w="200px"
              h="50px"
              color="brand.200"
              _hover={{ background: 'brand.300' }}
            >
              -
            </MenuButton>
            <MenuList bg="brand.500" borderColor="brand.300">
              <Text>CIAONE</Text>
              <MenuItem
                bg="brand.600"
                color="brand.300"
                _hover={{ bg: 'transparent', color: 'brand.100' }}
              />
              <MenuItem
                bg="brand.600"
                color="brand.300"
                _hover={{ bg: 'transparent', color: 'brand.100' }}
              />
              <MenuItem
                bg="brand.600"
                color="brand.300"
                _hover={{ bg: 'transparent', color: 'brand.100' }}
              />
            </MenuList>
          </Menu>
        </GridItem>
      ))}
    </>
  );
}
