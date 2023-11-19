import { useAppContext } from 'renderer/context/AppContext';
import { Grid } from '@chakra-ui/react';
import GridRow from './GridRow';

export default function GridMain() {
  const state = useAppContext();
  console.log('GridMain RENDER');
  return (
    <Grid
      templateColumns={`repeat(${state.fields.length}, 0fr)`}
      gap={0}
      autoFlow="unset"
      borderWidth={1}
      borderColor="brand.400"
    >
      {state.records.map((record) => (
        <GridRow key={record._id} record={record} />
      ))}
    </Grid>
  );
}
