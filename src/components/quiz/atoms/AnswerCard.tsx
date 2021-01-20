import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setAnswer } from '../../../app/actions';

interface Props {
  label: string;
  // setAnswer: () => void;
}

const AnswerCard: React.FC<Props> = ({ label }) => {
  const dispatch = useDispatch();

  // When user clicks on an answer, we store that answer in the store! Quiz.tsx is already grabbing this value from the store
  const onAnswerSelected = (answer: string) => {
    dispatch(setAnswer(answer));
  };

  return (
    <Wrapper>
      <Label>
        <input type="radio" name="radio" value={label} onClick={() => onAnswerSelected(label)} />
        <div className="text-wrapper">
          <Text>{label || 'No label spesified'}</Text>
        </div>
      </Label>
    </Wrapper>
  );
};

export default AnswerCard;

const Wrapper = styled.div`
  margin: 1em;
  text-align: center;
`;

const Label = styled.label`
  display: inline-block;
  width: 22em;
  height: 180px;
  box-shadow: 0 0 20px #c3c3c367;
  cursor: pointer;
  color: white;
  transition: 0.2s ease-in;

  :hover {
    filter: brightness(120%);
  }

  > input {
    display: none; // Hide the default radio button
  }

  // Add border-radius to Label and .text-wrapper
  &,
  .text-wrapper {
    border-radius: 12px;
  }

  .text-wrapper {
    background: linear-gradient(180deg, #38a0ff 0%, #52d2ee 100%);
    height: 100%; // So div takes the whole height! So we can center the text easily
    display: flex;
    justify-content: center;
    align-items: center;
  }

  // ? ADDS BORDER TO .text-wrapper WHEN INPUT INSIDE LABEL IS
  // & -> Is Label
  // input:check -> If input inside Label is checked,
  // .text-wraper -> we selected ".text-wrapper" (+ DIRECT CHILD of input) and add border!
  & input:checked + .text-wrapper {
    border: 5px solid #255bcf;
    /* background: linear-gradient(180deg, #ff9838 0%, #e1794d 100%); */
  }
`;

const Text = styled.p`
  font-size: 1.3rem;
`;
