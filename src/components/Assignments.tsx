import { Box, Heading, Select, Text } from "@chakra-ui/react";

export default function Assignments (){
    return(
        <>
        
        <Heading mt={10}>
                Assignments
        </Heading>
        <Box mt={5}>
        <Text>
        What is the climate in Australia?

        </Text>
        <Select mt={2} placeholder='Select option'>
  <option value='tropical'>Tropical climate</option>
  <option value='temperate'>Temperate climate</option>
  <option value='polar'>Polar climate</option>
</Select>
        </Box>

        </>
    )
}