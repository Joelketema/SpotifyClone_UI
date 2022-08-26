import {Box} from "@chakra-ui/react"
import SideBar from "../components/SideBar"
import RightPanel from "../components/RightPanel"
import Main from "../components/Main"

export default function Home() {
  return (
    <Box >
      <SideBar/>
      <Main />
      <RightPanel/>
    </Box>
  )
}
