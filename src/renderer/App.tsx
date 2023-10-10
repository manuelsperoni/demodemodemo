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
        <Flex direction="column" height="100vh" width="100vw" bg="Red">
          <Flex flex="0 100px" bg="green" />
          <Flex flex="auto" bg="blue" direction="row">
            <Flex flex="0 auto" bg="purple" direction="column">
              <motion.div animate={{ width: true ? 300 : 200 }} />
            </Flex>
            <Flex flex="auto" bg="orange">
              <Text>Suca</Text>
            </Flex>
          </Flex>
        </Flex>
      </AppProvider>
    </ChakraProvider>
  );
}
