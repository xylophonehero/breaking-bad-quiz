import { Box, Flex } from '@chakra-ui/react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

function Layout({ children })
{
  return (
    <Flex
      flexDirection="column"
      minH="100vh"
    >
      <Header />
      <Box
        as="main"
        flexGrow="1"
        bgColor="brand.700"
      >
        {children}
      </Box>
      <Footer />
    </Flex>
  );
}

export default Layout;