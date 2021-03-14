import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    brand: {
      50: '#e5fcf4',
      100: '#c3efe0',
      200: '#9de3cc',
      300: '#78d9b9',
      400: '#55cea4',
      500: '#3db48b',
      600: '#2e8c6c',
      700: '#20654e',
      800: '#103c2e',
      900: '#00150e',
    }
  },
  components: {
    Container: {
      baseStyle: {
        maxW: { base: '100%', lg: '960px', xl: '1152px' }
      }

    }
  },
})


