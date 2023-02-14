import "./style";
import { Button } from "./style";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

export default function App({ option }) {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <Button
      style={{
        background: option.info ? "#d8f8e1" : "#fabfb7",
      }}
    >
      {option.reward}
    </Button>
  );
}
