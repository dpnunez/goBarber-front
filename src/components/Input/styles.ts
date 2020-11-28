import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  hasError: boolean;
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
    props.hasError &&
    css`
      color: #c53030;
      border-color: #c53030;
    `}

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

const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

export { Container, Error };
