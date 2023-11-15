import { Grid } from '@chakra-ui/react';
import { useAppContext } from 'renderer/context/AppContext';
import RecordRow from './record-row';
import RecordHeader from './record-header';
import RecordEmpty from './record-empty';

export default function Records() {
  const state = useAppContext();
  return (
    <Grid
      templateColumns={`repeat(${state.fields.length}, 0fr)`}
      gap={0}
      autoFlow="unset"
      borderWidth={1}
      borderColor="brand.400"
    >
      <RecordHeader />
      <RecordEmpty />
      {[...Array(40)].map(() => (
        <RecordRow />
      ))}
    </Grid>
  );
}
