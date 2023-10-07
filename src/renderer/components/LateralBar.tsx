import { Flex, Spacer, Text, Icon, useDisclosure, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { RiSettings5Fill } from 'react-icons/ri';
import { motion } from 'framer-motion';

export default function LateralBar() {
  const [open, setOpen] = useState(false);
  return (
    <Box display={{ base: 'none', lg: 'flex' }}>
      <motion.div
        initial={false}
        animate={{ width: open ? 300 : 50 }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Flex
          direction="column"
          gap="20"
          padding={2}
          align="center"
          borderRightWidth="1px"
          borderColor="brand.400"
          bg="brand.600"
          height="100%"
        >
          <Icon as={RiSettings5Fill} color="brand.400" boxSize={6} />
        </Flex>
      </motion.div>
    </Box>
  );
}
