import { Flex, IconButton } from '@chakra-ui/react';
import { TfiMinus, TfiLayoutWidthFull, TfiClose } from 'react-icons/tfi';

export default function Winactions() {
  return (
    <Flex>
      <IconButton aria-label="minimize" icon={<TfiMinus />} borderRadius={0} />
      <IconButton
        aria-label="maximixe"
        icon={<TfiLayoutWidthFull />}
        borderRadius={0}
      />
      <IconButton aria-label="close" icon={<TfiClose />} borderRadius={0} />
    </Flex>
  );
}
