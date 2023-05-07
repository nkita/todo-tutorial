import { extendTheme, type ThemeConfig, createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { tagAnatomy } from '@chakra-ui/anatomy'


const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
const styles = {
  global: {
    'html, body': {
      bg: 'blue.50',
    },
  },
}
const theme = extendTheme({ styles, config })

export default theme

// Tag Theme
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys)