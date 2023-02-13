import { useContext, useEffect } from "react";
import "./style";
import { Body } from "./style";
import { QuizContext } from "../context/quiz";
import Welcome from "../components/welcome/index";
import Question from "../components/question/index";
import Conditions from "../components/conditions/index";
import Rewards from "../components/rewards/index";

export default function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <Body>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Conditions" && <Conditions />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <Rewards />}
    </Body>
  );
}
