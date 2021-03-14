import { Box, VStack, Text, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import PercentageBar from './PercentageBar';

function CharacterCard({ character, result, correct }) 
{

  return (
    <Box
      boxShadow="lg"
      p={8}
    >

      <Stack direction={["column", "row"]} alignItems="center" spacing={8}>
        <Box
          pos="relative"
          w="150px"
          h="150px"
        // overflow="hidden"
        // border={2}
        // borderColor="brand.800"
        // zIndex={1}
        >
          <Image
            src={character.img}
            alt={character.name}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </Box>
        <VStack spacing={2} alignItems={["center", "flex-start"]} justifyContent="center">
          <Text fontWeight="bold  ">{character.name}</Text>
          <Text>{character.status}</Text>
          <Text>You got this {correct ? "right" : "wrong"}</Text>
        </VStack>
        <PercentageBar width={200} left={result.correct} right={result.incorrect} />
      </Stack>
    </Box>
  );
}

export default CharacterCard;