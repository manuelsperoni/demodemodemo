import { Grid } from '@chakra-ui/react';
import RecordGridHeader from 'renderer/components/record-grid/record-grid-header';
import RecordGridItem from 'renderer/components/record-grid/record-grid-row';

export default function RecordGrid() {
  return (
    <Grid
      templateColumns="repeat(10, 0fr)"
      gap={0}
      autoFlow="unset"
      borderWidth={1}
      borderColor="brand.400"
    >
      <RecordGridHeader />
      {[...Array(40)].map(() => (
        <RecordGridItem />
      ))}
    </Grid>
  );
}
