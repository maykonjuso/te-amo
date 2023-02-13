import "./style";
import { Button } from "./style";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import { useState } from "react";

export default function App({ option, selectOption, answer }) {
  const [quizState, dispatch] = useContext(QuizContext);

  const [color, setColor] = useState("#ceb8e9");

  const handleClick = () => {
    selectOption();
    setColor("#84dbff");
  };

  return (
    <Button onClick={handleClick} style={{ backgroundColor: color }}>
      {option}
    </Button>
  );
}
