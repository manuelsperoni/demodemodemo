import { useAppContext } from 'renderer/context/AppContext';
import { Grid, GridItem, Text, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { List } from 'react-virtualized';
import GridRow from './GridRow';

export default function GridMain() {
  const state = useAppContext();
  useEffect(() => console.log('GridMain remount'), []);

  return (
    <Grid
      templateColumns={`repeat(${state.fields.length + 1}, 0fr)`}
      gap={0}
      autoFlow="unset"
      borderWidth={1}
      borderColor="brand.400"
    >
      {state.records.map((record) => (
        <GridRow record={record} />
      ))}
    </Grid>
  );
}
