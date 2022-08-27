
import { Box, Button, Text,Divider } from "@chakra-ui/react"
import { motion } from "framer-motion"
import {useRouter} from "next/router"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const spotBlack = "#010103"
const spotGrey = "#b3b3b3"
const spotGreen = "#1DB954"

const SideBar = () => {
    const router = useRouter()
    
    
    const playlists = ["Stranger Things Official Playlist","Top Female Artists of 2020 USA","The Weeknd","Slow"]
    return (
        <Box position={"fixed"} zIndex={10} left={0} bg={spotBlack} h={"100vh"} w={"18%"} p={2}  pl={3} color={spotGrey} display={"flex"} flexDirection={"column"}>
            <Box display={"flex"} flexDirection={"column"} mt={7} gap={2} w={"100%"}>
              
                <Box onClick={(e) => {
                    e.preventDefault()
                    router.push("/")
                }} display={"flex"} _hover={{color:"white"}} transitionDuration={"300ms"} cursor={"pointer"} alignItems={"center"} textAlign={"center"}  borderRadius={"md"} gap={5} w={"100%"} p={2} fontSize={"14px"} fontWeight={"bold"}>
              
                    <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z" fill="currentColor" data-darkreader-inline-fill="" style={{fontWeight:"bold",fontSize:"30px"}}></path>
                    </svg>

                    <Text>Home</Text>
                </Box>
               

                <Box onClick={(e) => {
                    e.preventDefault()
                    router.push("/search")
                }} display={"flex"} _hover={{ color: "white" }} transitionDuration={"300ms"} cursor={"pointer"} alignItems={"center"} borderRadius={"md"} gap={5} w={"100%"} p={2} fontSize={"14px"} fontWeight={"bold"}> 
        <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentColor" fill-rule="evenodd" data-darkreader-inline-fill="" style={{fontWeight:"bold",fontSize:"30px"}}></path></svg>

                    <Text>Search</Text>
                </Box>

                <Box display={"flex"} _hover={{color:"white"}} transitionDuration={"300ms"} cursor={"pointer"} alignItems={"center"} borderRadius={"md"} gap={5} w={"100%"} p={2} fontSize={"14px"} fontWeight={"bold"}>
                <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z" fill="currentColor" data-darkreader-inline-fill="" style={{fontWeight:"bold",fontSize:"30px"}}></path></svg>
                    <Text>Your Library</Text>
                </Box>

            </Box>

            <Box display={"flex"} flexDirection={"column"} mt={7} gap={2} w={"100%"}>
                
                <Box _hover={{color:"white"}} transitionDuration={"300ms"} display={"flex"} alignItems={"center"} cursor={"pointer"} borderRadius={"md"} gap={5} w={"100%"} p={2} fontSize={"14px"}  fontWeight={"bold"}>
                <AddBoxIcon sx={{fontSize:"30px",fontWeight:"bold"}} />
                    <Text>Create Playlist</Text>
                </Box>
              

                <Box display={"flex"} _hover={{color:"white"}} transitionDuration={"300ms"} cursor={"pointer"} alignItems={"center"} borderRadius={"md"} gap={5} w={"100%"} p={2}  fontSize={"14px"} fontWeight={"bold"}>
                <FavoriteBorderIcon sx={{fontSize:"30px",fontWeight:"bold"}} />
                    <Text>Liked Songs</Text>
                </Box>

            </Box>

            <Divider orientation={"horizontal"} mt={2} w={"90%"} />

            <Box display={"flex"} flexDirection={"column"} gap={2} mt={2} color={spotGrey} fontSize={"13px"}  p={2}>
                {
                    playlists.map(playlist=>{
                        return (
                        <Box cursor={"arrow"} key={playlist}>
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