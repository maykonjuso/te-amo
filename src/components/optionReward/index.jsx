import "./style";
import { Button } from "./style";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

export default function App({ option }) {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <Button
      style={{
        background: option.info ? "#6cd3a0" : "#f7a2ae",
      }}
    >
      {option.reward}
    </Button>
  );
}
