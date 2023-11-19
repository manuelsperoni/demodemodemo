import { Grid, Flex } from '@chakra-ui/react';
import { useAppContext } from 'renderer/context/AppContext';
import GridHeader from './GridHeader';
import GridMain from './GridMain';

export default function DataGrid() {
  const state = useAppContext();
  return (
    <Flex direction="column">
      <GridHeader />
      <GridMain />
    </Flex>
  );
}
