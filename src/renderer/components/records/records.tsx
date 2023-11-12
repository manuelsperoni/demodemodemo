import { Grid } from '@chakra-ui/react';
import RecordRow from './record-row';
import RecordHeader from './record-header';

export default function Records() {
  return (
    <Grid
      templateColumns="repeat(10, 0fr)"
      gap={0}
      autoFlow="unset"
      borderWidth={1}
      borderColor="brand.400"
    >
      <RecordHeader />
      {[...Array(40)].map(() => (
        <RecordRow />
      ))}
    </Grid>
  );
}
