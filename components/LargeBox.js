
import { Box, Button, Text, Image } from "@chakra-ui/react"

const LargeBox = ({color,image,title,size,max,min,font}) => {
  return (
    <Box bg={color} minHeight={"35vh"} minW={min} maxW={max} maxHeight={"35vh"} overflow={"hidden"} w={"87%"} p={50} rounded={"md"} display={"flex"} gap={5} flexDirection={"column"} justifyContent={"space-between"}>
          <Box fontSize={font} bg={"transparent"} w={size} ml={-45} mt={-10}>
              <Text>{title}</Text>
          </Box>
          
          <Box rounded={"md"} bg={"transparent"} alignSelf={"flex-end"} transform={"rotate(30deg) translateX(55%) translateY(-15%)"} mt={0}>
              <Image
                  src={image}
                  boxSize={"130px"} rounded={"md"}
              />
        </Box>
    </Box>
  )
}

export default LargeBox