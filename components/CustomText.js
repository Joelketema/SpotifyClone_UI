
import {  Box,Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
const spotBlack = "#010103"
const spotGrey = "#F7F7F7"
const spotGreen = "#1DB954"

export const CustomText = ({text,size}) => {
  return (
      <Box color={spotGrey} textAlign={"left"} bg={"transparent"}  w={"56%"}>
          <Text fontSize={size}>{text}</Text>
      </Box>
  )
}
