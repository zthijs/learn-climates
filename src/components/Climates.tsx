import { ArrowDownIcon, ArrowUpIcon, ExternalLinkIcon, TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { Box, Button, Collapse, Text, useDisclosure } from "@chakra-ui/react"
import ClimateModal from "./ClimateModal"
import polar from '../assets/polar.jpg'
import temperate from '../assets/temperate.jpg'
import tropical from '../assets/tropical.jpg'
import { useRef } from "react"



export default function Climates(){
    const { isOpen, onToggle } = useDisclosure()
    const finalRef = useRef()
    return (<>
        <Button  mt={5} w={"full"} rightIcon={isOpen ? <ArrowUpIcon/> : <ArrowDownIcon/>} colorScheme={"green"} onClick={onToggle}>{isOpen ? "Close climates" : "Open climates"}</Button>
      <Collapse in={isOpen} animateOpacity>
      <Box my={5} px={3}>
      <ClimateModal image={polar} title="Polar climate" >
                    <Text>
                    Can you imagine a place where you can make snowmen, have snowball fights, live in an igloo, walk through strong forces of wind, and bundle up in thick coats, boots, hats, and gloves every day of the year? There are places like this on Earth, and they're located in the polar climates of the North Pole and the South Pole. A climate is the type of weather a place has most of the time over hundreds of years. A polar climate is a place where the climate usually has a temperature below freezing, is icy, and is covered with snow most of the time. This is because polar climates don't get direct sunlight like other parts of the Earth. Polar climates are usually dry and don't get much rain.
                        
                    </Text>
                    <Text mt={5}>
                    The North Pole has an average temperature of 32° Fahrenheit in the summer, and -40° Fahrenheit during the winter. The South Pole has an average temperature of -18° Fahrenheit during the summer and -76° Fahrenheit during the winter. Climate change has caused an increase in the temperature of polar climates, which has resulted in more ice melting there.  
                    </Text> <Button leftIcon={<ExternalLinkIcon/>} mt={10} onClick={_=>window.open("https://www.worldatlas.com/articles/what-are-the-features-of-a-polar-climate.html")} w="full">Click here for more information</Button>
               
                </ClimateModal>
                <ClimateModal image={temperate} title="Temperate climate" >
                    <Text>
                    Places with a temperate climate are found between the much hotter Mediterranean climate zone and the much colder polar climate zone. This region includes much of Western Europe and some areas of the west coast of North America, in the Northern Hemisphere. In the southern half of the world, the south-east of Australia, New Zealand and some areas of Chile and Argentina have a temperate climate. The weather isn’t extreme in this zone. There are no freezing months of sub-zero temperatures in winter, although you may get the odd day like that. And the summers aren’t too hot or too dry. In fact, rainfall in this climate zone is spread throughout the year. Temperatures go up and down with the seasons, but the temperature range isn’t great, especially in coastal regions. The UK is a small island nation. That’s why, even away from the coast, the difference between the average temperature of the hottest month and the coldest month may be just 14°C in the UK. Did you know that in a hot desert region like the Sahara, the temperature can change by 20°C within the same day!
                        
                    </Text> <Button leftIcon={<ExternalLinkIcon/>} mt={10} onClick={_=>window.open("https://www.vedantu.com/geography/temperate-climate")} w="full">Click here for more information</Button>
                
                </ClimateModal>
                <ClimateModal image={tropical} title="Tropical climate" >
                    <Text>
                    We see the tropical climate near the equator. The equator is the dotted line you see on the earth. The tropical climate is known for having high temperatures all year long. The average temperature is between 21 and 30 degrees Celsius. Places with a tropical climate don’t know the autumn, winter, spring and summer. They know the dry and the rain season. The rain season is around the summer and the dry season is around the winter. We see the tropical climate in countries like Brazil, Indonesia and a lot of countries in Africa. 
                        
                    </Text>
                    <Button leftIcon={<ExternalLinkIcon/>} mt={10} onClick={_=>window.open("https://www.worldatlas.com/articles/what-is-a-tropical-climate.html")} w="full">Click here for more information</Button>
                </ClimateModal>
                </Box>
      </Collapse>
      </> )
}