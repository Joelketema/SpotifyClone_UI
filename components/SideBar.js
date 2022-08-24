
import { Box, Button, Text,Divider } from "@chakra-ui/react"
import { motion } from "framer-motion"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const spotBlack = "#010103"
const spotGrey = "#b3b3b3"
const spotGreen = "#1DB954"

const SideBar = () => {
    const playlists = ["Stranger Things Official Playlist","Top Female Artists of 2020 USA","The Weeknd","Slow"]
    return (
        <Box position={"fixed"} left={0} bg={spotBlack} h={"100vh"} w={"18%"} p={2}  pl={3} color={spotGrey} display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} flexDirection={"column"} mt={7} gap={2} w={"100%"}>
                <motion.div  whileHover={{color:"red"}} transition={{delay:0.5,duration:1}}>
                <Box display={"flex"} cursor={"pointer"} alignItems={"center"} textAlign={"center"}  borderRadius={"md"} gap={5} w={"100%"} p={2} fontSize={"14px"} fontWeight={"medium"}>
                        <HomeRoundedIcon sx={{fontSize:"30px",fontWeight:"bold"}} />
                    <Text>Home</Text>
                </Box>
                </motion.div>

                <Box display={"flex"} cursor={"pointer"}alignItems={"center"} borderRadius={"md"} gap={5} w={"100%"} p={2}  fontSize={"14px"} fontWeight={"medium"}>
                <SearchRoundedIcon sx={{fontSize:"30px",fontWeight:"bold"}} />

                    <Text>Search</Text>
                </Box>

                <Box display={"flex"} cursor={"pointer"} alignItems={"center"} borderRadius={"md"} gap={5} w={"100%"} p={2} fontSize={"14px"} fontWeight={"medium"}>
                <ClearAllIcon sx={{fontSize:"30px",fontWeight:"bold"}} />
                    <Text>Your Library</Text>
                </Box>

            </Box>

            <Box display={"flex"} flexDirection={"column"} mt={7} gap={2} w={"100%"}>
                <motion.div  whileHover={{color:"red"}} transition={{delay:0.5,duration:1}}>
                <Box display={"flex"} alignItems={"center"} cursor={"pointer"} borderRadius={"md"} gap={5} w={"100%"} p={2} fontSize={"14px"}  fontWeight={"medium"}>
                <AddBoxIcon sx={{fontSize:"30px",fontWeight:"bold"}} />
                    <Text>Create Playlist</Text>
                </Box>
                </motion.div>

                <Box display={"flex"} cursor={"pointer"} alignItems={"center"} borderRadius={"md"} gap={5} w={"100%"} p={2}  fontSize={"14px"} fontWeight={"medium"}>
                <FavoriteBorderIcon sx={{fontSize:"30px",fontWeight:"bold"}} />
                    <Text>Liked Songs</Text>
                </Box>

            </Box>

            <Divider orientation={"horizontal"} mt={2} w={"90%"} />

            <Box display={"flex"} flexDirection={"column"} gap={2} mt={2} color={spotGrey} fontSize={"14px"}  fontWeight={"medium"} p={2}>
                {
                    playlists.map(playlist=>{
                        return (
                        <Box cursor={"arrow"}>
                            <Text>{playlist}</Text>
                        </Box>
                        )
                    })
                }
 
            </Box>
        </Box>
    )
}

export default SideBar