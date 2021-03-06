import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import AnswerCard from '../atoms/AnswerCard';

interface Props {
  answers: string[];
}

const AnswerCards: React.FC<Props> = ({ answers }) => {
  return (
    <Wrapper>
      {answers.map((answer, idx) => (
        <AnswerCard key={idx} label={answer} />
      ))}
    </Wrapper>
  );
};

export default AnswerCards;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 50em;
`;
