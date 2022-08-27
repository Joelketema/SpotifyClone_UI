import '../styles/globals.css'
import Header from "../components/Header"
import { ChakraProvider } from "@chakra-ui/react"
import SideBar from "../components/SideBar"
import RightPanel from "../components/RightPanel"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <SideBar/>
      <Component {...pageProps} />
      <RightPanel/>
    </ChakraProvider>
  )
}

export default MyApp
