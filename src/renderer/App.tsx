import { Flex, ChakraProvider } from '@chakra-ui/react';
import Topbar from './components/topbar/Topbar';
import Main from './components/Main';
import AppTheme from './theme/theme';
import { AppProvider } from './store/AppContext';
import RawPreview from './components/raw-preview';
import BottomBar from './components/BottomBar';

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
          <Topbar />
          <Main />
          {/* <RawPreview /> */}
          <BottomBar />
        </Flex>
      </AppProvider>
    </ChakraProvider>
  );
}
