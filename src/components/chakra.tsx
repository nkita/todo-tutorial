import {
    ChakraProvider,
    cookieStorageManagerSSR,
    localStorageManager
} from '@chakra-ui/react'
import theme from './theme'
export default function Chakra(props: any) {
    const { cookies, children } = props
    const colorModeManager =
        typeof cookies === 'string'
            ? cookieStorageManagerSSR(cookies)
            : localStorageManager

    return (
        <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
            {children}
        </ChakraProvider>
    )
}

export async function getServerSideProps(req: any) {
    return {
        props: {
            cookies: req.headers.cookie ?? ''
        }
    }
}
