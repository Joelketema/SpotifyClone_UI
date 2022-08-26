import { Box, Button, Text,Divider } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Topbar from "./Topbar"
import { CustomText } from "./CustomText"
import Showcase from "./Showcase"
import Hero from "./Hero"

const spotDark = "#212121"
const spotBlack = "#010103"
const spotGrey = "#F7F7F7"
const spotGreen = "#1DB954"


const Main = ()=>{
    return (
        <Box bg={spotDark} fontSize={"14px"} fontWeight={"medium"} pl={5} overflowY={"scroll"} minHeight={"100vh"} maxHeight={"95vh"} w={"87vw"} display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"}>
            <Topbar />
            <CustomText text={"Good evening"} size={"xx-large"} />
            <Hero />
            <Showcase title={"Recently Played"} />
            <Showcase title={"Today's biggest hits"}/>
            <Showcase title={"Based on your recent listening"}/>
            <Showcase title={"Jump back in"}/>
        </Box>
    )
}

export default Main