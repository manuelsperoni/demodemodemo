import * as React from 'react';

// 1. import `ChakraProvider` component
import { Flex, ChakraProvider, Box } from '@chakra-ui/react';
import TopBar from './components/TopBar';
import Main from './components/Main';
import BottomBar from './components/BottomBar';
import LateralBar from './components/LateralBar';
import AppTheme from './theme/Theme';
import { AppProvider } from './context/AppContext';

export default function App() {
  return (
    <ChakraProvider theme={AppTheme}>
      <AppProvider>
        <Flex direction="column" height="100vh" width="100wh">
          <Flex width="100%" bg="Red">
            <TopBar />
          </Flex>
          <Flex width="100%" grow={1} overflow="hidden">
            <Flex>
              <LateralBar />
            </Flex>
            <Flex bg="Purple" grow={1}>
              <Main />
            </Flex>
          </Flex>
        </Flex>
      </AppProvider>
    </ChakraProvider>
  );
}
