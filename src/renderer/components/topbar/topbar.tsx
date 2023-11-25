import {
  Button,
  Divider,
  Flex,
  Icon,
  IconButton,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { BiDotsHorizontalRounded, BiFilter, BiMenu } from 'react-icons/bi';
import Winactions from './Winactions';

export default function Topbar() {
  return (
    <Flex
      borderBottom="1px"
      borderColor="brand.400"
      justify="right"
      align="center"
      paddingInline={4}
      bg="brand.500"
      flex="0 0 40px"
      paddingBlock="10px"
      gap={5}
    >
      <IconButton as={BiMenu} color="brand.200" size="md" />
      <Divider orientation="vertical" />
      <Text color="brand.100" fontSize="xl">
        Workspace / Personal expenses
      </Text>
      <IconButton as={BiDotsHorizontalRounded} color="brand.200" size="sm" />
      <Divider orientation="vertical" />
      <Button leftIcon={<BiFilter />} color="brand.200">
        Filter
      </Button>
      <Divider orientation="vertical" />
      <Button leftIcon={<BiFilter />} color="brand.200">
        Filter
      </Button>
      <Spacer />
      <Divider orientation="vertical" />

      <Winactions />
    </Flex>
  );
}
