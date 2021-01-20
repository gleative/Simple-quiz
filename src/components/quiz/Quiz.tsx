import React from 'react';
import styled from 'styled-components';
import { Questions } from '../../data/Questions';
import Modal from '../modal/Modal';
import AnswerCard from './atoms/AnswerCard';
import AnswerCards from './organisms/AnswerCards';

type Answer = {
  answer: string;
  idx: number;
};

interface AnswerWrapperProps {
  selected?: boolean;
}

interface SubmitAnswerProps {
  isDisabled?: boolean;
}

// TODO: Få inn score
// TODO: Mekk modal som viser utdypende svar, og om det er feil eller riktig
// TODO: Når ferdig, gjør klar neste spørsmål
// TODO: Få inn timer!

const Quiz: React.FC = () => {
  const [score, setScore] = React.useState(0);
  const [correctAnswers, setCorrectAnswers] = React.useState(Questions.length);
  const [timer, setTimer] = React.useState(0);
  const [currQuestion, setCurrQuestion] = React.useState<number>(0);
  const [answer, setAnswer] = React.useState<Answer>({ answer: '', idx: -1 });
  const [showModal, setShowModal] = React.useState(false); // 0 -> false, 1 -> true
  const [isAnswerCorrect, setIsAnswerCorrect] = React.useState(false);
  const questions = Questions;

  let questionAnswers = Questions[currQuestion].answers;

  const answerHandler = (answer: string, idx: number) => {
    console.log(answer);

    setAnswer({ answer: answer, idx: idx });
  };

  const submitAnswer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const finalAnswer = answer.answer;

    // We grab the div they answer and change background
    const element = document.getElementById(answer.answer);

    setTimeout(() => {
      if (finalAnswer === questions[currQuestion].correctAnswer) {
        // Change background to green since answer is correct
        if (element) element.style.background = 'linear-gradient(180deg, #38FF70 0%, #52EEAD 100%)';

        setScore((prevState) => prevState + 1);
        setIsAnswerCorrect(true);
      } else {
        const correctAnswer = document.getElementById(questions[currQuestion].correctAnswer.toString());

        if (element) element.style.background = 'linear-gradient(180deg, #FF3838 0%, #CE3F3F 100%)';

        // Display the correct answer for the user
        if (correctAnswer) correctAnswer.style.background = 'linear-gradient(180deg, #38FF70 0%, #52EEAD 100%)';

        setIsAnswerCorrect(false);
      }
    }, 1500);

    setTimeout(() => {
      setShowModal((prevState) => !prevState);
    }, 2000);
  };

  const nextQuestionHandler = () => {
    initNewQuestion();

    // Continue quiz if there is more questions left
    // if (questions.length - 1 <= currQuestion) {
    setCurrQuestion((prevState) => prevState + 1);
    setShowModal((prevState) => !prevState); // So it removes itself again, since we set in 'submitAnswer' func
    console.log('UPDATED CURR QUESTION: ', currQuestion);
  };

  const initNewQuestion = () => {
    const element = document.getElementById(answer.answer);

    if (element) {
      element.style.background = `${(props: AnswerWrapperProps) =>
        props.selected
          ? 'linear-gradient(180deg, #FF9838 0%, #E1794D 100%)'
          : 'linear-gradient(180deg, #38a0ff 0%, #52d2ee 100%)'};`;
    }

    setAnswer({ answer: '', idx: -1 });
    setIsAnswerCorrect(false);
  };

  return (
    <Wrapper>
      <QuestionWrapper>
        <QuestionText>{questions[currQuestion].title}</QuestionText>
      </QuestionWrapper>
      <AnswersForm onSubmit={submitAnswer}>
        <AnswersWrapper>
          <AnswerCards answers={questionAnswers} />
        </AnswersWrapper>
        <SubmitAnswer
          type="submit"
          isDisabled={answer.idx >= 0 ? false : true}
          disabled={answer.idx >= 0 ? false : true}
        >
          Submit
        </SubmitAnswer>
      </AnswersForm>
      {showModal && (
        <Modal
          answerTitle={questions[currQuestion].answerDetail?.answerTitle!}
          answerText={questions[currQuestion].answerDetail?.answerText!}
          answerPictureUrl={questions[currQuestion].answerDetail?.answerPictureUrl}
          nextQuestionHandler={nextQuestionHandler}
          isAnswerCorrect={isAnswerCorrect}
        />
      )}
    </Wrapper>
  );
};

export default Quiz;

const Wrapper = styled.div`
  margin: 0 auto;
`;

const QuestionWrapper = styled.div`
  position: absolute;
  background: linear-gradient(180deg, #38a0ff 0%, #52d2ee 100%);
  width: 100vw;
  left: 0;
  top: 200px;
`;

const QuestionText = styled.p`
  color: white;
  font-size: 40px;
  text-align: center;
  padding: 0.5em;
`;

const AnswersForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
`;

const AnswersWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  height: 22em; // Gives space between elements vertically
  margin: 8em 0; // To push the submit btn more downwards

  .correctStyle {
    background: linear-gradient(180deg, #38ff70 0%, #52eead 100%);
  }

  .wrongStyle {
    background: linear-gradient(180deg, #ff3838 0%, #ce3f3f 100%);
  }
`;

const SubmitAnswer = styled.button<SubmitAnswerProps>`
  background-color: #35288f;
  color: white;
  padding: 1em 3em;
  text-transform: uppercase;
  font-size: 22px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border-radius: 12px;

  :disabled {
    background: gray;
    cursor: not-allowed;
  }

  :hover {
    filter: ${(props) => (props.isDisabled ? '' : 'brightness(150%)')};
    transform: ${(props) => (props.isDisabled ? '' : 'scale(1.2)')};
  }
`;

const AnswerInput = styled.input<AnswerWrapperProps>`
  background: ${(props) =>
    props.selected
      ? 'linear-gradient(180deg, #FF9838 0%, #E1794D 100%)'
      : 'linear-gradient(180deg, #38a0ff 0%, #52d2ee 100%)'};
  border-radius: 12px;
  width: 40%;
  height: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in;
  display: inline-block;

  :hover {
    // ? Dont want hover effect on already selected answer
    filter: ${(props) => (props.selected ? '' : 'brightness(120%)')};
  }

  :checked {
    background: linear-gradient(180deg, #ff9838 0%, #e1794d 100%);
    color: pink;
  }
`;

const AnswerLabel = styled.label``;
