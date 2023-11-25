import { useAppContext } from 'renderer/context/AppContext';
import { Grid, GridItem, Text, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import GridRow from './GridRow';

function Row({ index, style }) {
  const state = useAppContext();
  return (
    <div style={style}>
      <GridRow style={style} record={state.records[index]} />
    </div>
  );
}

export default function GridMain() {
  const state = useAppContext();
  return (
    <Flex flex="1">
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="List"
            height={height}
            itemCount={state.records.length}
            itemSize={50}
            width={width}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </Flex>
  );
}
