import '../styles/globals.css'
import Header from "../components/Header"
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
