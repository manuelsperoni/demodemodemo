import { extendTheme } from '@chakra-ui/react';

// eslint-disable-next-line import/prefer-default-export
const AppTheme = extendTheme({
  initialColorMode: 'dark', // 'dark' | 'light'
  useSystemColorMode: false,
  components: {
    Button: {
      variants: {
        ghost: {
          background: 'transparent',
          color: 'brand.200',
          _hover: { background: 'brand.400', color: 'brand.100' },
          _expanded: { background: 'brand.400', color: 'brand.100' },
        },
        outline: {
          background: 'transparent',
          color: 'brand.200',
          borderColor: 'brand.400',
          _hover: { background: 'brand.400', color: 'brand.100' },
        },

        accent: {
          background: 'brand.accent',
          color: 'white',
          _hover: { background: 'brand.400', color: 'brand.100' },
          _expanded: { background: 'brand.400', color: 'brand.100' },
        },
        warning: {
          background: 'brand.400',
          color: 'brand.300',
          _hover: { background: 'red', color: 'brand.100' },
          _expanded: { background: 'brand.400', color: 'brand.100' },
        },
      },
      defaultProps: {
        variant: 'ghost',
      },
    },
  },
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

export default AppTheme;
