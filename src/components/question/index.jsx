import "./style";
import { Body, H1, P, Div, DivFlutter, Button } from "./style";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import { motion } from "framer-motion";
import Option from "../optiton/index";
import { useState } from "react";

export default function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  const currentQuestion = quizState.questions[quizState.currentQuestion];
  const [questionn, setQuestion] = useState();

  const saveOption = (option) => {
    setQuestion(option);
  };

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

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
      <Div>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </Div>

      <DivFlutter>
        <H1>{currentQuestion.question}</H1>
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            saveOption={() => saveOption(option)}
            hide={quizState.optionToHide === option ? "hide" : null}
          />
        ))}
      </DivFlutter>
      {questionn && (
        <Button
          onClick={() => onSelectOption(questionn)}
          as={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          continuar
        </Button>
      )}
    </Body>
  );
}
