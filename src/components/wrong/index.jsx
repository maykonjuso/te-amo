import "./style";
import { Body, H1, P, Div, DivFlutter, Button } from "./style";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import { motion } from "framer-motion";

export default function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  const currentQuestion = quizState.questions[quizState.currentQuestion];

  return (
    <Body
      as={motion.body}
      initial={{ opacity: 0.5, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
    >
      <Div>Errou</Div>
      <DivFlutter>
        <H1>Sua recompensa</H1>
        <P>{quizState.rewards[quizState.currentQuestion]} </P>
      </DivFlutter>
      <Button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
        continuar
      </Button>
    </Body>
  );
}
