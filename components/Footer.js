import { Box, Text, Link, HStack } from "@chakra-ui/react";


function Footer(props)
{
  return (
    <Box
      bgColor="brand.800"
      p={6}
    >
      <HStack justify="space-evenly">
        <Text color="white">Website created by <Link href="https://nickworrall.co.uk/" isExternal>Nick Worrall</Link></Text>
        <Text color="white">API created by <Link href="https://breakingbadapi.com/" isExternal>Timbiles</Link></Text>
      </HStack>

    </Box>
  );
}

export default Footer;