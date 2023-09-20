import { Flex, Box, Collapse, useDisclosure, Button } from '@chakra-ui/react';
import AnalyticsView from 'renderer/mainView/AnalyticsView';
import TransactionsView from 'renderer/mainView/TransactionsView';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAppContext } from 'renderer/context/AppContext';

export default function Main() {
  const state = useAppContext();

  return (
    <Flex flex="1" direction="row" overflowY="hidden">
      {/* Left column */}
      <Flex
        overflowY="scroll"
        bg="brand.600"
        flex="1"
        direction="column"
        paddingInline="5"
        gap="5"
        height="calc(100vh - 70px)"
        sx={{
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <TransactionsView />
      </Flex>

      {/* Right column */}
      <motion.div
        initial={false}
        animate={{ width: state.ui.openPopup ? 'calc(100vw - 600px)' : 0 }}
      >
        <Flex
          overflowY="scroll"
          bg="brand.500"
          flex="1"
          direction="column"
          paddingInline="5"
          gap="5"
          height="calc(100vh - 70px)"
          sx={{
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          <AnalyticsView />
        </Flex>
      </motion.div>
      <Flex
        overflowY="scroll"
        bg="brand.600"
        flex="1"
        direction="column"
        paddingInline="5"
        gap="5"
        height="calc(100vh - 70px)"
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
