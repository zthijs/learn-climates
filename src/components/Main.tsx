import { World } from "./World";
import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import Videos from "./Videos";
import Climates from "./Climates";
import Quiz from "./Quiz";

export default function Main() {
  return (
    <Flex
      direction={useBreakpointValue({ base: "column", md: "row" })}
      w={"100vw"}
    >
      <Box cursor={"grab"} onDragStart={() => console.log("yeet")} bg="black">
        <World />
      </Box>
      <Box
        p={"10"}
        color={"white"}
        w={"full"}
        h={"100vh"}
        style={{ overflowY: "scroll" }}
        bg="gray.800"
      >
        <Heading>Welcome</Heading>

        <Text my={5}>
          The earth has all different kinds of weather. It can be really cold
          but it also can be really warm. Why is it that we have these
          differences? We have these differences because of climates. The earth
          has three main climates; the <strong>tropical</strong> climate, the{" "}
          <strong>temperate</strong> climate and the <strong>polar</strong>{" "}
          climate. Each of these climates have their own characteristics. On
          this website you will find out what characteristics each climate has
          and why they have them.
        </Text>
        <Text my={5}>
          First watch the videos below to get to know the climates.
        </Text>

        <Videos />
        <Climates />
        <Quiz />
      </Box>
    </Flex>
  );
}
