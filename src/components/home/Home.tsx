import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Home: React.FC = () => {
  const history = useHistory();

  function startQuizHandler() {
    history.push('/quiz');
  }

  return (
    <Wrapper>
      <Ul>
        <Li>
          <QuizBtn onClick={startQuizHandler}>Start quiz</QuizBtn>
        </Li>
        <Li>
          <QuizBtn>Instuctions</QuizBtn>
        </Li>
        <Li>
          <QuizBtn>Options</QuizBtn>
        </Li>
      </Ul>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  /* background: red; */
`;

const Ul = styled.ul`
  display: grid;
  grid-template-columns: auto;
  gap: 1em;
  list-style: none;
`;

const Li = styled.li`
  margin: 0 auto;
`;

const QuizBtn = styled.a`
  display: block; // ! a is inline, therefor u cannot specify width! But with block u can
  text-transform: uppercase;
  width: 13em;
  padding: 1em 0;
  background: linear-gradient(180deg, #38a0ff 0%, #52d2ee 100%);
  border-radius: 12px;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  text-align: center;

  :hover {
    width: 15em;
    filter: saturate(220%);
  }
`;
