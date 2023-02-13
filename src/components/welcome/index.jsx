import "./style";
import { Body, H1, P, Div, DivFlutter, Button } from "./style";
import imagem from "../../img/heart.svg";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import { motion } from "framer-motion";

export default function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <Body
      as={motion.body}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Div>
        <img src={imagem} />
      </Div>
      <DivFlutter>
        <H1>Bem-vinda ao primeiro quiz feito para você e pelo seu mozão!</H1>
        <P>
          O objetivo aqui é responder algumas perguntas relacionadas ao nosso
          relacionamento, ou seja, terão perguntas sobre situações, atitudes e
          momentos, TUDINHO.
        </P>
      </DivFlutter>
      <Button
        onClick={() => dispatch({ type: "CHANGE_STAGE_CONDITION" })}
        type="button"
        as={motion.button}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        continuar
      </Button>
    </Body>
  );
}
