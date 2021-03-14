import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';

import { theme } from 'styles/chakra-theme';
import Layout from '@/components/Layout'
import QuizContextProvider from 'context/quizContext';

function MyApp({ Component, pageProps })
{
  return (
    <ChakraProvider theme={theme}>
      <QuizContextProvider>
        <Layout>
          <AnimatePresence>
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </QuizContextProvider>
    </ChakraProvider>
  );
}
export default MyApp;
