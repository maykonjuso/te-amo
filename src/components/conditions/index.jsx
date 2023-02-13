import "./style";
import {
  Body,
  H1,
  P,
  Div,
  DivFlutter,
  Button,
  TittleGreen,
  TittleRed,
} from "./style";
import imagem from "../../img/attention.svg";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import { motion } from "framer-motion";

export default function App() {
  const [quizState, dispatch] = useContext(QuizContext);
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
        <img src={imagem} />
      </Div>
      <DivFlutter>
        <H1>Condições</H1>
        <div>
          <div>
            <TittleGreen>Acerto</TittleGreen>
            <P>Você receberá uma recompensa por isso.</P>
          </div>
          <div>
            <TittleRed>Erro</TittleRed>
            <P>Você receberá uma recompensa também, só que não tão boa.</P>
          </div>
        </div>
      </DivFlutter>
      <Button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
        continuar
      </Button>
    </Body>
  );
}
