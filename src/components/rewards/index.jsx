import "./style";
import { Body, H1, P, Div, DivFlutter } from "./style";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import { motion } from "framer-motion";
import OptionReward from "../optionReward/index";

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
      <Div>Suas recompensas</Div>
      <DivFlutter>
        {quizState.rewards.map((option) => (
          <OptionReward option={option} key={option} />
        ))}
      </DivFlutter>
    </Body>
  );
}
