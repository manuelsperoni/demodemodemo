import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const outline = defineStyle({
  background: 'transparent',
  color: 'brand.200',
  borderColor: 'brand.400',
  _hover: { background: 'brand.400', color: 'brand.100' },
  _active: { background: 'red' },
});

const ghost = defineStyle({
  background: 'transparent',
  color: 'brand.200',
  fontWeight: 'normal',
  _hover: { background: 'brand.400' },
  _active: { background: 'brand.400' },
});

const accent = defineStyle({
  background: 'brand.accent',
  color: 'white',
  _hover: { background: 'brand.400', color: 'brand.100' },
  _expanded: { background: 'brand.400', color: 'brand.100' },
});

export const buttonTheme = defineStyleConfig({
  variants: { outline, ghost, accent },
  defaultProps: { variant: 'ghost' },
});
