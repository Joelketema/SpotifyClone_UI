import '../styles/globals.css'
import Header from "../components/Header"
import { ChakraProvider } from "@chakra-ui/react"
import SideBar from "../components/SideBar"
import RightPanel from "../components/RightPanel"
import Player from "../components/Player"
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header />
      <SideBar/>
      <Component {...pageProps} />
      <RightPanel />
      <Player/>
    </ChakraProvider>
  )
}

export default MyApp
