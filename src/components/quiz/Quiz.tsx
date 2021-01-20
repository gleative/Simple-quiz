import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { clearAnswer, incrementScore } from '../../app/actions';
import { Questions } from '../../data/Questions';
import Modal from '../modal/Modal';
import AnswerCard from './atoms/AnswerCard';
import AnswerCards from './organisms/AnswerCards';
import { QuizState } from './quizReducer';

interface Answer {
  answer: string;
  idx: number;
}
interface SubmitAnswerProps {
  isDisabled?: boolean;
}

// TODO: Få inn score -- DONE
// TODO: Mekk modal som viser utdypende svar, og om det er feil eller riktig -- DONE
// TODO: Når ferdig, gjør klar neste spørsmål -- DONE
// TODO: Få inn timer!

const Quiz: React.FC = () => {
  // ? REDUX
  /**
   * ? useSelector
   * @param QuizState -> Staten vi forventer å hente fra store!
   * @param QuizState['score'] -> return verdien vi får fra reducer! Vi velger feltet vi får! (score)
   */
  const score = useSelector<QuizState, QuizState['score']>((state) => state.score);
  const answerStore = useSelector<QuizState, QuizState['answer']>((state) => state.answer);
  const dispatch = useDispatch();

  const onIncrementScore = (score: number) => {
    dispatch(incrementScore(score)); // We send the data to the reducer which then will save to the store
  };

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

    // We grab the div they answer and change background
    const element = document.getElementById(answer.answer);

    setTimeout(() => {
      if (answerStore === questions[currQuestion].correctAnswer) {
        // Change background to green since answer is correct
        if (element) element.style.background = 'linear-gradient(180deg, #38FF70 0%, #52EEAD 100%)';

        onIncrementScore(score + 1);
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
    // initNewQuestion();

    // Continue quiz if there is more questions left
    // if (questions.length - 1 <= currQuestion) {
    setCurrQuestion((prevState) => prevState + 1);
    setShowModal((prevState) => !prevState); // So it removes itself again, since we set in 'submitAnswer' func
    dispatch(clearAnswer());
    resetAnswersStyling();
    console.log('UPDATED CURR QUESTION: ', currQuestion);
    // }
  };

  const resetAnswersStyling = () => {
    // SELECT RADIO BUTTON THAT IS CHECKED
    const elem = document.querySelector('input[type="radio"]:checked') as HTMLInputElement;
    if (elem) elem.checked = false;
  };

  return (
    <Wrapper>
      <h3 style={{ textAlign: 'center' }}>Score: {score}</h3>

      <QuestionWrapper>
        <QuestionText>{questions[currQuestion].title}</QuestionText>
      </QuestionWrapper>
      <AnswersForm onSubmit={submitAnswer}>
        <AnswersWrapper>
          <AnswerCards answers={questionAnswers} />
        </AnswersWrapper>
        <SubmitAnswer
          type="submit"
          // isDisabled={answer.idx >= 0 ? false : true}
          disabled={answerStore === ''}
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
