import React from 'react'
import {useState,useReact,useContext,useRef} from "react"
import { Box, Button, Text,Divider,Image } from "@chakra-ui/react"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeDownOutlinedIcon from '@mui/icons-material/VolumeDownOutlined';
import VolumeMuteOutlinedIcon from '@mui/icons-material/VolumeMuteOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RepeatIcon from '@mui/icons-material/Repeat';

import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react'
  

const spotBlack = "#010103"
const spotGrey = "#b3b3b3"
const spotGreen = "#1DB954"
const spotDark = "#212121"

const Player = () => {
    const [playing, setPlaying] = useState(false)
    
  return (
      <Box p={5} minH={"15vh"} maxH={"15vh"} bg={spotDark} w={"100%"} position={"sticky"} bottom={0} zIndex={100} display={"flex"} justifyContent={"space-between"} >
          <Box  w={"30%"} display={"flex"} justifyContent={"space-around"}  alignItems={"center"}>
              <Box>
                   <Image src="data:image/jpeg;base64,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"
                boxSize={"55px"} objectFit={"cover"} 
                />
              </Box>

              <Box w={"40%"}>
                  <Text fontSize={"medium"}>Driver's Liscence</Text>
                  <Text color={spotGrey} fontSize={"small"}>Olivia Rodriogo</Text>
              </Box>

              <Box display={"flex"} gap={2} w="40%">
                  <FavoriteBorderIcon sx={{color:spotGrey,fontSize:"17px"}}/>
                  <DoDisturbAltIcon sx={{color:spotGrey,fontSize:"17px"}}/>
                  
              </Box>
          </Box>

          <Box p={5}  w={"40%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
              <Box display={"flex"} w={"40%"}  justifyContent={"space-between"} gap={5}  alignItems={"center"}>
                  <ShuffleIcon sx={{fontSize:"20px"}}/>
                  <SkipPreviousIcon sx={{fontSize:"25px"}}/>
                  {playing ? <PlayCircleIcon sx={{fontSize:"40px"}} onClick={()=>setPlaying(false)} /> : <PauseCircleIcon sx={{fontSize:"40px"}} onClick={()=>setPlaying(true)}/>}
                  <SkipNextIcon sx={{fontSize:"25px"}} />
                  <RepeatIcon sx={{fontSize:"20px"}}/>
              </Box>

              <Box w={"100%"}>
              <Slider aria-label='slider-ex-2' colorScheme="green" defaultValue={0} rounded={"full"}>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
                </Slider>    
              </Box>
          </Box>

          <Box  w={"20%"} display={"flex"} justifyContent={"center"} alignItems={"center"}  >
              <Box display={"flex"} justifyContent={"space-between"} w={"50%"} gap={2}>
                  <VolumeUpOutlinedIcon />
                  <Slider aria-label='slider-ex-2' colorScheme="green" defaultValue={0}>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>  
              </Box>
              
          </Box>
    </Box>
  )
}

export default Player