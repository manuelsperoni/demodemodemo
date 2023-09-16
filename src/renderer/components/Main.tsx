import { Flex, Box, Collapse, useDisclosure, Button } from '@chakra-ui/react';
import AnalyticsView from 'renderer/mainView/AnalyticsView';
import TransactionsView from 'renderer/mainView/TransactionsView';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Main() {
  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
  const [hidden, setHidden] = useState(!isOpen);
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
        {' '}
        <Button {...getButtonProps()}>Toggle</Button>
        <TransactionsView />
      </Flex>
      {/* Right column */}
      <motion.div
        hidden={hidden}
        initial={false}
        onAnimationStart={() => setHidden(false)}
        onAnimationComplete={() => setHidden(!isOpen)}
        animate={{ width: isOpen ? 1000 : 0 }}
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
    </Flex>
  );
}
