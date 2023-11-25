import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const variants = definePartsStyle({
  // define the part you're going to style
  outline: {
    field: {
      color: 'brand.200', // change the input text color
      border: 'none',
      borderColor: 'red',
      background: 'transparent',
      _hover: { border: 'none' },
    },
  },
});

export const inputTheme = defineMultiStyleConfig({
  variants,
  defaultProps: { focusBorderColor: 'transparent' },
});
