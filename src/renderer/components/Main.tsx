import { Flex, Box, Collapse, useDisclosure, Button } from '@chakra-ui/react';
import AnalyticsView from 'renderer/mainView/AnalyticsView';
import TransactionsView from 'renderer/mainView/TransactionsView';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAppContext } from 'renderer/context/AppContext';

export default function Main() {
  const state = useAppContext();

  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      flex="1 1 auto"
      bg="brand.600"
      overflow="hidden"
    >
      <Flex
        overflowY="scroll"
        bg="brand.600"
        flex="1 auto"
        direction="column"
        paddingInline="5"
        gap="5"
        sx={{
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <TransactionsView />
      </Flex>
    </Flex>
  );
}
