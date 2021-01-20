import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/header/Header';
import Home from './components/home/Home';
import AnswerCard from './components/quiz/atoms/AnswerCard';
import Quiz from './components/quiz/Quiz';

// TODO: Mekk quiz siden. Lag spørsmål og få til interaction i quiz appen.

function App() {
  return (
    <Wrapper>
      <header>
        <Header />
      </header>
      <BrowserRouter>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/quiz" component={Quiz} />
          </Switch>
        </main>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 95%;
  height: 100vh;
  /* background: pink; */
  margin: 0 auto;

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80%;
  }
`;
