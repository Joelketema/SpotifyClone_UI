
import { Box, Button,Image, Text,Divider } from "@chakra-ui/react"
import { motion } from "framer-motion"
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
// import pic from "./Capture.png"
const spotBlack = "#010103"
const spotGrey = "#b3b3b3"
const spotGreen = "#1DB954"
const swhite ="#212121" 

const RightPanel = () => {
 
    const playlists = ["Stranger Things Official Playlist","Top Female Artists of 2020 USA","The Weeknd","Slow"]
    return (
        <Box position={"absolute"} zIndex={15} top={0} right={0} bg={spotBlack} h={"100vh"} w={"20%"} p={2}  pl={3} color={spotGrey} display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} flexDirection={"column"} mt={3} gap={2} w={"100%"}>
                <motion.div  whileHover={{color:"red"}} transition={{delay:0.5,duration:1}}>
                <Box display={"flex"} cursor={"pointer"} justifyContent={"space-between"} alignItems={"center"} textAlign={"center"}  borderRadius={"md"} gap={5} w={"100%"} p={2} fontSize={"14px"} fontWeight={"medium"}>
                    <Text color={"white"} fontSize={"md"}>Friend activity</Text>
                        <PersonAddAltIcon sx={{fontSize:"20px",fontWeight:"bold"}} />
                </Box>
                </motion.div>

                <Box display={"flex"} alignItems={"center"} borderRadius={"md"} gap={5} w={"100%"} p={2}  fontSize={"14px"} fontWeight={"medium"}>
                    <Text w={"100%"}>Let friends and followers on Spotify see what you are listening .</Text>
                </Box>


            </Box>

            <Box display={"flex"}  flexDirection={"column"} mt={2} gap={2} w={"90%"}>
                <Image src={"/capture.png"} h={"100%"}  /> 

            </Box>

    

            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} gap={2} mt={0} color={spotGrey} fontSize={"14px"}  fontWeight={"medium"} p={2}>
            
                <Box display={"flex"} cursor={"pointer"} alignItems={"center"} borderRadius={"md"} gap={5} w={"100%"} p={2} fontSize={"14px"} fontWeight={"medium"}>
                    <Text w={"100%"}>
                    {"Go to Settings > Social and enable 'Share my listening activity on Spotify'.You can turn this off at any time."}
                    </Text>
                </Box>

                <Box textAlign={"center"} color={spotBlack} cursor={"pointer"} _hover={{transform:"scale(1.1)",border:`1px solid% ${spotGrey} `}} minWidth={"0%"} bg={"white"} border={`0.8px solid ${spotGrey}`} rounded={"full"} p={3} justifyContent={"center"} alignItems={"center"} w={"75%"} >
                  <Text letterSpacing={2}  fontSize={"md"} fontWeight={"bold"}>SETTINGS</Text>
              </Box>
 
            </Box>
        </Box>
    )
}

export default RightPanel