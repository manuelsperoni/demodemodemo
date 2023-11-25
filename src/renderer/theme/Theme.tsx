import { extendTheme } from '@chakra-ui/react';
import { menuTheme } from './menuTheme';
import { buttonTheme } from './buttonsTheme';
import { colorsTheme } from './colorsTheme';
import { inputTheme } from './inputTheme';

// eslint-disable-next-line import/prefer-default-export
const AppTheme = extendTheme({
  initialColorMode: 'dark', // 'dark' | 'light'
  useSystemColorMode: false,
  components: {
    Menu: menuTheme,
    Button: buttonTheme,
    Input: inputTheme,
  },
  colors: colorsTheme,
});

export default AppTheme;
