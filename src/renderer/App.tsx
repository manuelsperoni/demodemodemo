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
        {/* Layout */}
        <Flex direction="column" height="100vh" width="100vw">
          {/* Top bar */}
          <TopBar />
          {/* Central */}
          <Flex overflow="hidden" height="100%">
            {/* Lateral */}
            <LateralBar />
            {/* Main */}
            <Main />
          </Flex>
        </Flex>
      </AppProvider>
    </ChakraProvider>
  );
}
