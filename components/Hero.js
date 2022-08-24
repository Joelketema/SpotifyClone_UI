import { Box, Button, Text, Divider } from "@chakra-ui/react"
import { Grid, GridItem } from '@chakra-ui/react'
import { motion } from "framer-motion"
import LargeCard from "./LargeCard"


const spotBlack = "#010103"
const spotGrey = "#F7F7F7"
const spotGreen = "#1DB954"

const Hero = () => {
    const list=["windows down","Liked Songs","Top Hits of 2015","tiktok august 2022","Daily Mix 1","Sidist(Vl)" ]
  return (
      <Box w={"90%"} >
          <Grid pt={5} pl={5}  ml={180} w={"90%"} gap={5} templateColumns={"repeat(3,1fr)"} >
          {
              list.map(l => {
                  return (
                      <GridItem> <LargeCard key={l} title={l}/> </GridItem>               
                  )
              }) 
              }
            </Grid>
    </Box>
  )
}

export default Hero