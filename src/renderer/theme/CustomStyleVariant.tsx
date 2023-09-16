import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const customGhost = defineStyle({
  background: 'transparent',
  color: 'brand.200',
  _hover: { background: 'brand.400', color: 'brand.100' },
});

export const buttonTheme = defineStyleConfig({
  variants: { customGhost },
});
