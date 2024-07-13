import { Box, Button, Collapse, useDisclosure } from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@chakra-ui/icons";

export default function Videos() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Button
        w={"full"}
        rightIcon={isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
        colorScheme={"blue"}
        onClick={onToggle}
      >
        {isOpen ? "Close video's" : "Open video's"}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box my={5}>
          <iframe
            width="100%"
            height="300"
            src="https://www.youtube-nocookie.com/embed/iA23Sm-HI4I"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
        <Box my={5}>
          <iframe
            width="100%"
            height="300"
            src="https://www.youtube-nocookie.com/embed/hY3sa68hpM8"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Collapse>
    </>
  );
}
