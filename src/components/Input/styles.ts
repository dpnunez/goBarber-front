import styled, { css } from 'styled-components';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  width: 100%;
  background-color: #232129;
  border: 2px solid #232129;
  border-radius: 10px;
  padding: 18px;
  color: #666360;
  transition: all 150ms ease;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    color: #f4ede8;
    background: transparent;
    flex: 1;

    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 12px;
  }
`;

export { Container };
