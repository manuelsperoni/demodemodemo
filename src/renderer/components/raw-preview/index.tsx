import { Flex } from '@chakra-ui/react';
import { useAppContext } from 'renderer/store/AppContext';

function getHighlightedText(text, highlight) {
  // Split on highlight term and include term into parts, ignore case
  const parts = text.split(new RegExp(`".*?"`, 'gi'));
  return (
    <span>
      {' '}
      {parts.map((part, i) => (
        <span
          key={i}
          style={
            part.toLowerCase() === highlight.toLowerCase()
              ? { color: '#858BE9' }
              : {}
          }
        >
          {`a${part}b`}
        </span>
      ))}{' '}
    </span>
  );
}

export default function RawPreview() {
  const state = useAppContext();
  return (
    <Flex
      flex="0 0 300px"
      bg="brand.400"
      overflow="scroll"
      sx={{
        '::-webkit-scrollbar': {
          display: 'none',
        },
      }}
      color="brand.100"
      padding={10}
    >
      <pre>
        <code lang="javascript">{JSON.stringify(state, null, 4)}</code>
      </pre>
    </Flex>
  );
}
