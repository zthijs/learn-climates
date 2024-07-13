import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Question({
  question,
  setIndex,
  index,
}: {
  question: any;
  setIndex: any;
  index: number;
}) {
  const [answer, setAnswer] = useState<any>(null);

  useEffect(() => {
    setAnswer(null);
  }, [index]);

  const AlertGoed = () => (
    <Alert
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      borderRadius={"xl"}
      justifyContent="center"
      textAlign="center"
      height="200px"
      my={5}
      status="success"
    >
      <AlertIcon />
      <AlertTitle>Correct answer!</AlertTitle>
      <AlertDescription>{question.why}</AlertDescription>
    </Alert>
  );
  const AlertFout = () => (
    <Alert
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      borderRadius={"xl"}
      textAlign="center"
      height="200px"
      my={5}
      status="error"
    >
      <AlertIcon />
      <AlertTitle>Wrong answer!</AlertTitle>
      <AlertDescription>{question.why}</AlertDescription>
    </Alert>
  );

  return (
    <Box>
      {answer === true && <AlertGoed />}
      {answer === false && <AlertFout />}
      <Text my={5}>{question.question}</Text>
      <HStack>
        {answer === null ? (
          question.answers.map((answer: any) => (
            <Button
              onClick={() => {
                if (answer.correct) setAnswer(true);
                if (!answer.correct) setAnswer(false);
              }}
              w={"full"}
              key={answer.label}
            >
              {answer.label}
            </Button>
          ))
        ) : (
          <Button onClick={() => setIndex((c: number) => c + 1)} w={"full"}>
            Next
          </Button>
        )}
      </HStack>
    </Box>
  );
}
