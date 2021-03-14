import { Box, Text, Link } from "@chakra-ui/react";


function Footer(props)
{
  return (
    <Box
      bgColor="brand.800"
      p={6}
    >
      <Text color="white">Website created by <Link href="https://nickworrall.co.uk/" isExternal>Nick Worrall</Link></Text>
    </Box>
  );
}

export default Footer;