import { ArrowDownIcon, ArrowUpIcon, TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { Box, Button, Collapse, Text, useDisclosure } from "@chakra-ui/react"
import ClimateModal from "./ClimateModal"
import polar from '../assets/polar.jpg'
import temperate from '../assets/temperate.jpg'
import { useRef } from "react"



export default function Climates(){
    const { isOpen, onToggle } = useDisclosure()
    const finalRef = useRef()
    return (<>
        <Button  mt={5} w={"full"} rightIcon={isOpen ? <ArrowUpIcon/> : <ArrowDownIcon/>} colorScheme={"green"} onClick={onToggle}>{isOpen ? "Close climates" : "Open climates"}</Button>
      <Collapse in={isOpen} animateOpacity>
      <Box px={3}>
      <ClimateModal image={polar} title="Polar climate" >
                    <Text>
                        The polar regions of the Earth are the coldest regions on Earth.
                        
                    </Text>
                </ClimateModal>
                <ClimateModal image={temperate} title="Temperate climate" >
                    <Text>
                        The polar regions of the Earth are the coldest regions on Earth.
                        
                    </Text>
                </ClimateModal>
                </Box>
      </Collapse>
      </> )
}