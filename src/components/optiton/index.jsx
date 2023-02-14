import "./style";
import { Button } from "./style";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

export default function App({ option, saveOption }) {
  const [quizState, dispatch] = useContext(QuizContext);

  const handleClick = () => {
    saveOption();
  };

  return <Button onClick={handleClick}>{option}</Button>;
}
