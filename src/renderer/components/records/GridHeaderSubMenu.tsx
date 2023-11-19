import {
  Text,
  Flex,
  Spacer,
  Button,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  Input,
  IconButton,
} from '@chakra-ui/react';
import { useState } from 'react';
import {
  BiCalendar,
  BiPlus,
  BiRuler,
  BiText,
  BiTrash,
  BiUser,
} from 'react-icons/bi';
import {
  addFieldOption,
  removeFieldOption,
  editFieldOption,
} from 'renderer/actions/Actions';
import { useAppDispatch } from 'renderer/context/AppContext';

export default function GridHeaderSubMenu({ field }) {
  const dispatch = useAppDispatch();
  const [fieldOption, setFieldOpiton] = useState('');
  return (
    <Flex direction="column" gap="2" margin={4}>
      {/* Common */}
      <Text color="brand.200" fontSize="xs" marginInline={5}>
        TYPE
      </Text>
      <Flex direction="column" gap="0">
        <Button variant="menuItemRounded" gap="5">
          <BiUser color="brand.100" /> User
          <Spacer />
        </Button>
        <Button variant="menuItemRounded" gap="5">
          <BiText color="brand.100" /> Text
          <Spacer />
        </Button>
        <Button variant="menuItemRounded" gap="5">
          <BiRuler color="brand.100" /> Measure
          <Spacer />
        </Button>
        <Button
          variant="menuItemRounded"
          gap="5"
          bg={true ? 'brand.300' : 'none'}
          color={true ? 'brand.100' : 'brand.200'}
        >
          <BiCalendar color="brand.100" /> Date
          <Spacer />
        </Button>
      </Flex>

      {/* Specific */}

      <Divider borderColor="brand.300" />
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
                dispatch(addFieldOption(field.description, fieldOption))
              }
            />
          </Flex>

          {field.values.map((value, index) => (
            <Menu key={index} closeOnSelect={false} preventOverflow>
              <MenuButton
                w="100%"
                h="40px"
                color="brand.200"
                borderRadius={5}
                _hover={{ background: 'brand.300' }}
              >
                <Flex align="center" gap="5" justify="left" paddingInline={5}>
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
                      editFieldOption(field.description, value, e.target.value)
                    )
                  }
                />
                <Flex direction="column">
                  <Button
                    variant="menuItemRounded"
                    gap="5"
                    onClick={() =>
                      dispatch(removeFieldOption(field.description, value))
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
    </Flex>
  );
}
