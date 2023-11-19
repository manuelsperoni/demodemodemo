import {
  Menu,
  MenuButton,
  MenuList,
  Text,
  Flex,
  Spacer,
  Input,
  Divider,
  Button,
} from '@chakra-ui/react';
import {
  BiArrowToBottom,
  BiArrowToTop,
  BiCalendar,
  BiRuler,
  BiText,
  BiTrash,
  BiUser,
} from 'react-icons/bi';
import { FieldType } from 'renderer/types/Types';
import { useAppDispatch } from 'renderer/context/AppContext';
import { removeField, editFieldDescription } from 'renderer/actions/Actions';
import GridHeaderSubMenu from './GridHeaderSubMenu';

export default function GridHeaderMenu({ field }) {
  const dispatch = useAppDispatch();

  return <>{/* NAME */}</>;
}
