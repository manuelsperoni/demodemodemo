import * as React from 'react';

// 1. import `ChakraProvider` component
import { Flex, extendTheme, ChakraProvider } from '@chakra-ui/react';
import CCTopBar from './components/CCTopBar';
import CCMain from './components/CCMain';
import CCBottomBar from './components/CCBottomBar';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#FFFFFF',
      200: '#DDDDDF',
      300: '#A3A4A',
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
      <Flex bg="brand.700" direction="column" height="100vh">
        <CCTopBar />
        <CCMain />
        <CCBottomBar />
      </Flex>
    </ChakraProvider>
  );
}
