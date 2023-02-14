import { createContext, useReducer } from "react";
import questions from "../data/questions";
const STAGES = ["Start", "Conditions", "Playing", "Right", "Wrong", "End"];

let goodGifts = [
  "Cafuné",
  "Pix de vintão",
  "Te conto na hora",
  "Ir a um café",
  "Comer o que você quiser",
  "Uma massagem",
  "Sua sacola da Shein agora",
  "Te conto na hora",
  "Uma vale para me arrumar",
  "Uma fofoca",
  "Um elogio",
  "Um beijo",
  "Fazer minha sobracelha",
];

let badGifts = [
  "Massagem para seu amor",
  "Não ficar calada por 1 mês",
  "Pix de vintão para seu amor",
  "Dançar a música que seu amor quiser",
  "Andar de bicicleta",
  "Fica na FGA quando seu amor tiver aula",
  "Cantar uma música",
  "Postar algo boiola para seu amor",
  "Postar qualquer coisa que seu amor quiser",
  "Algo que seu amor quiser",
  "Admitir algo q seu amor quiser",
  "Correr por 3 minutos",
  "10 abdominais",
];

let rewards = [];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  answerSelected: false,
  selectedOption: false,
  rewards: rewards,
  optionToHide: null,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STAGE_CONDITION":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "CHANGE_STAGE":
      return {
        ...state,
        gameStage: STAGES[2],
      };

    case "START_GAME":
      let quizQuestions = null;

      state.questions.forEach((question) => {
        if (question.category === action.payload) {
          quizQuestions = question.questions;
        }
      });

      return {
        ...state,
        questions: quizQuestions,
        gameStage: STAGES[2],
      };

    case "REORDER_QUESTIONS":
      const reorderedQuestions = state.questions.sort(() => {
        return Math.random() - 0.5;
      });

      return {
        ...state,
        questions: reorderedQuestions,
      };

    case "CHANGE_QUESTION": {
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!state.questions[nextQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[5] : STAGES[2],
        answerSelected: false,
        help: false,
      };
    }

    case "CHECK_ANSWER": {
      if (state.answerSelected) return state;

      const answer = action.payload.answer;
      const option = action.payload.option;

      let randomIndex;
      let randomItem;

      if (answer === option) {
        do {
          randomIndex = Math.floor(Math.random() * goodGifts.length);
          randomItem = goodGifts[randomIndex];
        } while (rewards.includes(randomItem));

        rewards.push(randomItem);

        return {
          ...state,
          answerSelected: option,
          gameStage: STAGES[3],
          selectedOption: false,
        };
      } else {
        do {
          randomIndex = Math.floor(Math.random() * badGifts.length);
          randomItem = badGifts[randomIndex];
        } while (rewards.includes(randomItem));

        rewards.push(randomItem);

        return {
          ...state,
          answerSelected: option,
          gameStage: STAGES[4],
          selectedOption: false,
        };
      }
    }

    case "SELECT_OPTION": {
      return {
        ...state,
        selectedOption: true,
      };
    }

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
