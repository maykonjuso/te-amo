import "./style";
import { Button } from "./style";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

export default function App({ option }) {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <Button
      style={{
        background: option.info ? "#A9ECA2" : "#FCB1B1",
      }}
    >
      {option.reward}
    </Button>
  );
}
