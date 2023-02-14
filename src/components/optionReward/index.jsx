import "./style";
import { Button } from "./style";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

export default function App({ option }) {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <Button
      style={{
        background: option.info ? "#9bd3ae" : "#e9b8be",
      }}
    >
      {option.reward}
    </Button>
  );
}
