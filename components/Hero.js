import { Box, Button, Text, Divider } from "@chakra-ui/react"
import { Grid, GridItem } from '@chakra-ui/react'
import { motion } from "framer-motion"
import LargeCard from "./LargeCard"


const spotBlack = "#010103"
const spotGrey = "#F7F7F7"
const spotGreen = "#1DB954"

const Hero = () => {
    const list=["windows down","Liked Songs","Top Hits of 2015","tiktok august 2022"]
  return (
      <Box w={"90%"} >
          <Grid pt={5} pl={5}  ml={180} w={"80%"} gap={5} templateColumns={"repeat(2,1fr)"} >
          {
              list.map(l => {
                  return (
                      <GridItem key={l}> <LargeCard  title={l}/> </GridItem>               
                  )
              }) 
              }
            </Grid>
    </Box>
  )
}

export default Hero