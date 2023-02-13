import "./style";
import { Button } from "./style";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import { useState } from "react";

export default function App({ option, saveOption}) {
  const [quizState, dispatch] = useContext(QuizContext);

  const [color, setColor] = useState("#ceb8e9");

  const handleClick = () => {
    saveOption();
    if (!quizState.selectedOption) {
      setColor("#E9B8BE");
      dispatch({ type: "SELECT_OPTION" });
    }
  };

  return (
    <Button onClick={handleClick} style={{ backgroundColor: color }}>
      {option}
    </Button>
  );
}
