import * as React from 'react';

// 1. import `ChakraProvider` component
import { Flex, extendTheme, ChakraProvider, Box } from '@chakra-ui/react';
import TopBar from './components/TopBar';
import Main from './components/Main';
import BottomBar from './components/BottomBar';
import LateralBar from './components/LateralBar';
import { buttonTheme } from './theme/CustomStyleVariant';

const theme = extendTheme({
  components: { Button: buttonTheme },
  colors: {
    brand: {
      100: '#DDDDDF',
      200: '#A6A7AB',
      300: '#5B5D62',
      400: '#313235',
      500: '#222326',
      600: '#1D1E20',
      accent: '#4771DC',
    },
  },
});

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box position="fixed" top="0" left="0" width="100vw" height="40px">
        <TopBar />
      </Box>
      <Box
        width="calc(100vw - 40px)"
        height="calc(100vh - 70px)"
        marginTop="40px"
        marginLeft="40px"
      >
        <Main />
      </Box>

      <Flex
        position="fixed"
        left="0"
        width="40px"
        top="40px"
        height="calc(100vh - 70px)"
        flex="1"
        bg="brand.600"
      >
        <LateralBar />
      </Flex>
      <Box position="fixed" bottom="0" width="100vw" height="30px">
        <BottomBar />
      </Box>
    </ChakraProvider>
  );
}
