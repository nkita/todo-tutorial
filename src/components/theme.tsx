import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
const styles = {
  global: {
    'html, body': {
      bg:'blue.50'
    },
  },
}
const theme = extendTheme({ styles, config })

export default theme