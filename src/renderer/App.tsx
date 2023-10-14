import * as React from 'react';

// 1. import `ChakraProvider` component
import { Flex, ChakraProvider, Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
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
          <Flex flex="0 0 50px">
            <TopBar />
          </Flex>
          <Flex flex="1 1 auto" direction="row" overflow="hidden">
            <LateralBar />
            <Main />
          </Flex>
        </Flex>
      </AppProvider>
    </ChakraProvider>
  );
}
