import { VStack, Text, Box, Flex } from '@chakra-ui/layout';
import { motion } from 'framer-motion'

function PercentageBar({ width, left, right })
{
  const fraction = (left) / (left + right)

  return (
    <VStack spacing={4} justify="center">
      <Text>{Math.floor(100 * fraction)}% of users got this right</Text>
      <Flex
        w={`${width}px`}
        h="50px"
        bgColor="brand.600"
      >
        <Box
          as={motion.div}
          initial={{ width: 0 }}
          animate={{
            width: `${width * fraction}px`,
            transition: { duration: 1 }
          }}
          h="50px"
          bgColor="brand.800"
        />
      </Flex>
    </VStack>
  );
}

export default PercentageBar;