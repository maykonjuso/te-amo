import "./style";
import { Button } from "./style";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

export default function App({ option, saveOption }) {
  const [quizState, dispatch] = useContext(QuizContext);

  const currentReward = quizState.rewards[quizState.currentQuestion];

  const handleClick = () => {
    saveOption();
  };

  return <Button onClick={handleClick} style={"background :" (currentReward.info) ? "gree" : "red"}>{option}</Button>;
}
