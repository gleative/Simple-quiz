import styled from 'styled-components';

export const ScalingButton = styled.button`
  :hover {
    filter: ${(props) => (props.isDisabled ? '' : 'brightness(150%)')};
    transform: ${(props) => (props.isDisabled ? '' : 'scale(1.2)')};
  }
`;
