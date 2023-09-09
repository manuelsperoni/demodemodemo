import * as React from 'react';

// 1. import `ChakraProvider` component
import { Flex, extendTheme, ChakraProvider, Box } from '@chakra-ui/react';
import CCTopBar from './components/CCTopBar';
import CCMain from './components/CCMain';
import CCBottomBar from './components/CCBottomBar';
import CCLateralBar from './components/CCLateralBar';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#FFFFFF',
      200: '#DDDDDF',
      300: '#A3A4A8',
      400: '#37383C',
      500: '#292A2E',
      600: '#222325',
      700: '#1C1D1F',
      accent: '#4771DC',
    },
  },
});

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box position="fixed" top="0" left="0" width="100vw" height="40px">
        <CCTopBar />
      </Box>
      <Box
        width="calc(100vw - 40px)"
        height="calc(100vh - 70px)"
        marginTop="40px"
        marginLeft="40px"
      >
        <CCMain />
      </Box>

      <Flex
        position="fixed"
        left="0"
        width="40px"
        top="40px"
        height="calc(100vh - 70px)"
        flex="1"
      >
        <CCLateralBar />
      </Flex>
      <Box position="fixed" bottom="0" width="100vw" height="30px">
        <CCBottomBar />
      </Box>
    </ChakraProvider>
  );
}
