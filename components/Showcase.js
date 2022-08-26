import { Box, Button, Text, Divider } from "@chakra-ui/react"
import { Grid, GridItem } from '@chakra-ui/react'
import { motion } from "framer-motion"
import { CustomText } from "./CustomText"
import SmallCard from "./SmallCard"



const Showcase = ({title}) => {

  
const spotBlack = "#010103"
const spotGrey = "#b3b3b3"
const spotDark = "#202124"
  const spotGreen = "#1DB954"
  
  const data =[{
    topTitle: "Today's Top Hits",
    bottomTitle:"BLACKPINK are on top of the Hottest 50!"
  },
  {
    topTitle: "Today's Top Hits",
    bottomTitle:"BLACKPINK are on top of the Hottest 50!"
    },
  
    {
      topTitle: "Today's Top Hits",
      bottomTitle:"BLACKPINK are on top of the Hottest 50!"
    }
  ]
  return (
    <Box w={"60vw"} pt={5} mt={"5"} >
        <Box color={"white"} display={"flex"} flexDirection={"column"}  textAlign={"left"} bg={"transparent"} w={"95%"} ml={"90px"}>
        <Text fontSize={"lg"}>{title}</Text>
        <Box textAlign={"right"}>
          <Text fontSize={"smaller"} >SEE ALL</Text>
        </Box>
      </Box>
     
      <Box mt={0} w={"100%"}>
      <Grid pt={0} pl={5}  ml={70} w={"100%"} gap={5} templateColumns={"repeat(3,1fr)"} >
        {data.map(d => {
          return (
            <GridItem key={d.topTitle}><SmallCard topTitle={d.topTitle} bottomTitle={d.bottomTitle}  /></GridItem>
            
          )
        })}
          </Grid>
      </Box>
    </Box>
  )
}

export default Showcase