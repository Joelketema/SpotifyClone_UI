import React from 'react'
import { useState, useEffect } from "react"

import { Box, Button, Text, Input,Image,InputGroup,InputLeftElement,InputRightElement } from "@chakra-ui/react"
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import LargeBox from "../components/LargeBox"
import {Grid,GridItem} from "@chakra-ui/react"



const spotBlack = "#010103"
const spotGrey = "#b3b3b3"
const spotGreen = "#1DB954"
const spotDark = "#212121"

const search = () => {

    const items = [{
        color:"#5E427B",
        image: "https://images.genius.com/9981be1fb5fa67fb8ba50d3f54b7b73e.640x640x1.jpg",
        title:"Pop"
    },
        {
            color:"#914806",
            image: "https://yt3.ggpht.com/DIEqRepL0JEro5q3en3lLUyI_vqmot1yghANEaDjANJULzP-2BaewW0XSQX-mzbAgmp4EuODjTA=s900-c-k-c0x00ffffff-no-rj",
            title: "Hip-Hop"
        },
        
        {
            color:"#B01425",
            image: "https://yt3.ggpht.com/DIEqRepL0JEro5q3en3lLUyI_vqmot1yghANEaDjANJULzP-2BaewW0XSQX-mzbAgmp4EuODjTA=s900-c-k-c0x00ffffff-no-rj",
        title:"Dance / Electronic "}
    ]

    const Browseitems = [{
        color:"#5E427B",
        image: "https://images.genius.com/9981be1fb5fa67fb8ba50d3f54b7b73e.640x640x1.jpg",
        title:"Pop"
    },
        {
            color:"#914806",
            image: "https://yt3.ggpht.com/DIEqRepL0JEro5q3en3lLUyI_vqmot1yghANEaDjANJULzP-2BaewW0XSQX-mzbAgmp4EuODjTA=s900-c-k-c0x00ffffff-no-rj",
            title: "Hip-Hop"
        },
        
        {
            color:"#B01425",
            image: "https://yt3.ggpht.com/DIEqRepL0JEro5q3en3lLUyI_vqmot1yghANEaDjANJULzP-2BaewW0XSQX-mzbAgmp4EuODjTA=s900-c-k-c0x00ffffff-no-rj",
            title: "Dance / Electronic "
        },
        {
            color:"#B01425",
            image: "https://yt3.ggpht.com/DIEqRepL0JEro5q3en3lLUyI_vqmot1yghANEaDjANJULzP-2BaewW0XSQX-mzbAgmp4EuODjTA=s900-c-k-c0x00ffffff-no-rj",
            title: "Dance / Electronic "
        },
        {
            color:"#B01425",
            image: "https://yt3.ggpht.com/DIEqRepL0JEro5q3en3lLUyI_vqmot1yghANEaDjANJULzP-2BaewW0XSQX-mzbAgmp4EuODjTA=s900-c-k-c0x00ffffff-no-rj",
            title: "Dance / Electronic "
        },
        {
            color:"#B01425",
            image: "https://yt3.ggpht.com/DIEqRepL0JEro5q3en3lLUyI_vqmot1yghANEaDjANJULzP-2BaewW0XSQX-mzbAgmp4EuODjTA=s900-c-k-c0x00ffffff-no-rj",
        title:"Dance / Electronic "}
    ]
  return (
      <Box bg={spotDark} fontSize={"14px"} fontWeight={"medium"} pl={5} overflowY={"scroll"} minHeight={"100vh"} maxHeight={"95vh"} w={"87vw"} display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"center"}>
          <Topbar />
          <SearchShow items={items} title={"Your top genres"} />
          <Browse Browseitems={Browseitems} title={"Browse all"} />

      </Box>
  )
}


function SearchShow({items,title}) {
    return (
        <Box mt={5}  display={"flex"} flexDirection={"column"} w={"95%"} justifyContent={"center"} alignItems={"center"}>
            <Box color={"white"} display={"flex"} flexDirection={"column"}  textAlign={"left"} bg={"transparent"} w={"64%"} ml={"90px"}>
                <Text fontSize={"x-large"}>{title}</Text>
            </Box>
        <Grid mt={0} pl={2} ml={"10%"}  minW={"65%"}maxW={"55%"} overflowX={"scroll"} h={"45vh"} gap={5} templateColumns={"repeat(4,1fr)"}>
        {
            items.map(i => {
                return (
                  <GridItem mt={5}>  <LargeBox key={i.title} size={"40%"} min={"35vw"} font={"x-large"} max={"35vw"} title={i.title} image={i.image} color={i.color} /></GridItem>        )
            })
            }
        
            </Grid>
        </Box>
    )
}

function Browse({Browseitems,title}) {
    return (
        <Box mt={10} display={"flex"} flexDirection={"column"} w={"95%"} justifyContent={"center"} alignItems={"center"}>
            <Box color={"white"} display={"flex"} flexDirection={"column"}  textAlign={"left"} bg={"transparent"} w={"64%"} ml={"90px"}>
                <Text fontSize={"x-large"}>{title}</Text>
            </Box>
            <Grid mt={5} minW={"55%"}maxW={"55%"}  h={"40vh"} gap={5} templateColumns={"repeat(3,1fr)"}>
        {
            Browseitems.map(i => {
                return (
                  <GridItem>  <LargeBox key={i.title} size={"80%"}  min={"17vw"} font={"lg"} max={"17vw"}  title={i.title} image={i.image} color={i.color} />
                
                </GridItem>)
            })
            }
        
            </Grid>
        </Box>
    )
}

function Topbar() {
    
    const [show, setShow] = useState(false)
    const [input, setInput] = useState("")
    
    const handleChange = (e) => {
        setInput(e.target.value)
        if (e.target.value !== "") {
            setShow(true)
        }
        else setShow(false)
        
    }

const spotBlack = "#010103"
const spotGrey = "#F7F7F7"
const spotGreen = "#1DB954"
const spotDark = "#212121"
const url ="https://www.liblogo.com/img-logo/de8063d9de-deadpool-logo-deadpool-logo-and-symbol-meaning-history-png-brand.png"


  return (
      <Box p={5} fontSize={"14px"} zIndex={5} fontWeight={"medium"} position="sticky" top={0} bg={spotDark} color={spotGrey}  h={"fit-content"} w={"100%"} display={"flex"} justifyContent={"space-around"} alignItems={"center"}>
          <Box display={"flex"} gap={3} pl={3} w={"50%"} position={"absolute"}>
              <Box  bg={spotBlack} p={1} h={"30px"} w={"30px"} rounded={"full"}>
              <ChevronLeftRoundedIcon sx={{fontSize:"35px",fontWeight:"normal",position:"absolute",marginTop:"-7px",marginLeft:"-7px"}} />

              </Box>

              <Box bg={"transparent"} p={1} h={"fit-content"} w={"fit-content"} rounded={"full"}>
              <ChevronRightRoundedIcon sx={{fontSize:"35px",fontWeight:"normal",position:"absolute",marginTop:"-7px",marginLeft:"-7px"}} />

              </Box>
              
          </Box>


          <Box w={"40%"} ml={65} display={"flex"} bg={"transparent"} gap={2} justifyContent={"space-between"} alignItems={"center"}>
              <Box w={"75%"}>
              <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                children={<SearchRoundedIcon sx={{fontSize:"30px",fontWeight:"bold",color:"black"}} />}
                />
                      <Input bg={"white"} color={show?"black" : spotGrey} value={input} onChange={handleChange} placeholder={"Artists,songs,or podcasts"} rounded={"full"} />
                      {show ?
                          <InputRightElement
                              onClick={() => {
                                  setInput("")
                                  setShow(false)
                              }}
                              children={<CloseIcon sx={{ fontSize: "30px", fontWeight: "bold", color: "black" }} />}
                          /> : null
                }
            </InputGroup>
          </Box>
              <Box w={"7vw"} position={"absolute"} right={"8%"} bg={spotBlack} rounded={"full"} p={1} justifyContent={"center"} alignItems={"center"}  display={"flex"} gap={3}>
                  <Image src={url} boxSize={"20px"} objectFit={"cover"} bg={"transparent"} alt={"avatar"} />
                  <Text>Joel</Text>
              </Box>
              
          </Box>
      </Box>
  )

}

export default search