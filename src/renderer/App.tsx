import { Flex, ChakraProvider } from '@chakra-ui/react';
import TopBar from './components/topbar/topbar';
import Main from './components/main';
import AppTheme from './theme/Theme';
import { AppProvider } from './context/AppContext';

export default function App() {
  return (
    <ChakraProvider theme={AppTheme}>
      <AppProvider>
        <Flex
          direction="column"
          height="100vh"
          width="100vw"
          sx={{
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <TopBar />
          <Main />
        </Flex>
      </AppProvider>
    </ChakraProvider>
  );
}
