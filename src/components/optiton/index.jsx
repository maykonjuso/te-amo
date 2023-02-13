import "./style";
import { Button } from "./style";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

export default function App({ option, selectOption, answer }) {
  const [quizState, dispatch] = useContext(QuizContext);
  return <Button onClick={() => selectOption()}>{option}</Button>;
}
