import React from 'react';
import styled, { keyframes } from 'styled-components';

type ModalProps = {
  answerTitle: string;
  answerText: string;
  answerPictureUrl?: string;
  nextQuestionHandler: () => void;
  isAnswerCorrect: boolean;
};

const Modal: React.FC<ModalProps> = ({
  answerTitle,
  answerText,
  answerPictureUrl,
  nextQuestionHandler,
  isAnswerCorrect,
}) => {
  return (
    <Wrapper>
      <ModalWrapper>
        <H2>{answerTitle}</H2>
        <h3>{isAnswerCorrect ? 'Correct!' : 'Wrong!'}</h3>
        <P>{answerText}</P>
        <BtnWrapper>
          <Btn onClick={nextQuestionHandler}>Next question</Btn>
        </BtnWrapper>
      </ModalWrapper>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const arriveFromBottom = keyframes`
  0% {
    transform: translateY(200%);
  },

  100% {
    transform: translateY(0);
  }
`;

const ModalWrapper = styled.div`
  max-width: 68em;
  padding: 2em;
  background: linear-gradient(180deg, #38a0ff 0%, #52d2ee 100%);
  color: white;
  border-radius: 12px;
  /* transform: translateY(200%); */
  animation: ${arriveFromBottom} 0.8s;
  /* transition: 1s ease-in-out; */
`;

const H2 = styled.h2`
  margin-bottom: 1em;
  font-size: 34px;
`;

const P = styled.p`
  line-height: 140%;
  font-size: 19px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Btn = styled.button`
  padding: 2em 3em;
  border-radius: 12px;
  background: white;
  border: 0;
  cursor: pointer;
  margin-top: 3em;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  font-size: 15px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);

  :hover {
    filter: brightness(150%);
    transform: scale(1.2);
  }
`;
