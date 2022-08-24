import { Box, Button, Text,Divider } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Topbar from "./Topbar"
import { CustomText } from "./CustomText"
import Hero from "./Hero"

const spotDark = "#212121"
const spotBlack = "#010103"
const spotGrey = "#F7F7F7"
const spotGreen = "#1DB954"


const Main = ()=>{
    return (
        <Box bg={spotDark} fontSize={"14px"} fontWeight={"medium"} h={"100vh"} w={"100vw"} display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"}>
            <Topbar />
            <CustomText text={"Good evening"} size={"xx-large"} />
            <Hero/>
        </Box>
    )
}

export default Main