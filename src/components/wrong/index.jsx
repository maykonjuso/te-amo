import "./style";
import { Body, H1, P, Div, DivFlutter, Button, Divir, H12 } from "./style";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import { motion } from "framer-motion";
import Option from "../optiton/index";

export default function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  const currentReward = quizState.rewards[quizState.currentQuestion];
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  const answer = currentQuestion.answer;

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
        <P>{currentReward.reward}</P>
        <Divir>
          <H12>Resposta correta</H12>
          <Option option={answer} key={answer} />
        </Divir>
      </DivFlutter>
      <Button
        onClick={() => dispatch({ type: "CHANGE_QUESTION" })}
        as={motion.button}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        continuar
      </Button>
    </Body>
  );
}
