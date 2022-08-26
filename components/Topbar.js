
import { Box, Button, Text,Image } from "@chakra-ui/react"
import { motion } from "framer-motion"
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const spotBlack = "#010103"
const spotGrey = "#F7F7F7"
const spotGreen = "#1DB954"
const spotDark = "#212121"
const url ="https://www.liblogo.com/img-logo/de8063d9de-deadpool-logo-deadpool-logo-and-symbol-meaning-history-png-brand.png"

export default function Topbar() {
  return (
      <Box p={5} fontSize={"14px"}  fontWeight={"medium"} position="sticky" top={0} bg={spotDark} color={spotGrey}  h={"fit-content"} w={"100%"} display={"flex"} justifyContent={"space-around"} alignItems={"center"}>
          <Box display={"flex"} gap={3} pl={3} w={"50%"} position={"absolute"}>
              <Box  bg={spotBlack} p={1} h={"30px"} w={"30px"} rounded={"full"}>
              <ChevronLeftRoundedIcon sx={{fontSize:"35px",fontWeight:"normal",position:"absolute",marginTop:"-7px",marginLeft:"-7px"}} />

              </Box>

              <Box bg={"transparent"} p={1} h={"fit-content"} w={"fit-content"} rounded={"full"}>
              <ChevronRightRoundedIcon sx={{fontSize:"35px",fontWeight:"normal",position:"absolute",marginTop:"-7px",marginLeft:"-7px"}} />

              </Box>
              
          </Box>

          <Box w={"27%"} ml={650} display={"flex"} bg={"transparent"} gap={2} justifyContent={"center"} alignItems={"center"}>
                <Box cursor={"pointer"} _hover={{transform:"scale(1.1)",border:`1px solid% ${spotGrey} `}} minWidth={"0%"} bg={spotBlack} border={`0.8px solid ${spotGrey}`} rounded={"full"} p={2} justifyContent={"center"} alignItems={"center"} w={"50%"} display={"flex"} gap={3}>
                  <Text>UPGRADE</Text>
              </Box>

              <Box bg={spotBlack} rounded={"full"} p={1} justifyContent={"center"} alignItems={"center"} w={"35%"} display={"flex"} gap={3}>
                  <Image src={url} boxSize={"20px"} objectFit={"cover"} bg={"transparent"} alt={"avatar"} />
                  <Text>Joel</Text>
              </Box>
              
          </Box>
      </Box>
  )
}
