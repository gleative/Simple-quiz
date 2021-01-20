import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Text>Quiz Master</Text>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  padding: 2em 0;
  height: 8vh;
`;

const Text = styled.p`
  font-size: 40px;
  letter-spacing: 0.24em;
  font-weight: 600;
  background: linear-gradient(180deg, #3da8fd 0%, #50ccf1 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-transform: uppercase;
`;
