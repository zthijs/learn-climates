import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import Question from "./Question";

const data = [
  {
    question:
      "In some parts of the world, rainstorms have become more intense over the past several decades. Is that a change in weather or climate?",
    answers: [
      { label: "Weather", correct: false },
      { label: "Climate", correct: true },
    ],
    why: "The trend of more intense rainstorms in certain locations is a sign of a changing climate. One heavy rainstorm is a weather event. But the trend of more intense rainstorms is a sign of a changing climate.",
  },
  {
    question:
      "Without the natural greenhouse effect, Earth’s temperature would be well below freezing. Is this true or false?",
    answers: [
      { label: "True", correct: true },
      { label: "False", correct: false },
    ],
    why: "Without the natural greenhouse effect, the average global temperature would be around -18°C (0°F).",
  },
  {
    question: "What is the climate in Australia?",
    answers: [
      { label: "Tropical", correct: false },
      { label: "Temperate", correct: false },
      { label: "Polar", correct: true },
    ],
    why: "The climate in Australia is polar.",
  },
  {
    question:
      "When you hear it’s unusually hot today, is that about the climate or weather?",
    answers: [
      { label: "Climate", correct: false },
      { label: "Weather", correct: true },
    ],
    why: "Whether it’s hot or cold, or sunny or rainy today is a reflection of daily weather conditions, not climate.",
  },
  {
    question: "The ocean affects Earth’s climate. Is this true or false?",
    answers: [
      { label: "True", correct: true },
      { label: "False", correct: false },
    ],
    why: "The ocean stores vast amounts of heat and carbon, which it exchanges with the atmosphere to impact climate.",
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  if (currentQuestion === data.length) {
    return (
      <Alert
        variant="subtle"
        borderRadius={"xl"}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        my={5}
        status="success"
      >
        <AlertIcon />
        <AlertTitle>You are finished</AlertTitle>
        <AlertDescription>
          You completed all the questions! For more information visit the
          following site :{" "}
        </AlertDescription>
        <a
          target={"_blank"}
          href="https://www.amnh.org/explore/ology/climate-change/what-is-climate-change"
        >
          find your answers here
        </a>
      </Alert>
    );
  }
  return (
    <Box mt={10} p={5} borderRadius={"xl"} border={"2px"}>
      <Heading>Question {currentQuestion + 1}</Heading>
      <Question
        index={currentQuestion}
        setIndex={setCurrentQuestion}
        question={data[currentQuestion]}
      />
    </Box>
  );
}
