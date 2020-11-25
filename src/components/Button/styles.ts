import styled from 'styled-components';
import { shade } from 'polished';

const Container = styled.button`
  width: 100%;
  background-color: #ff9000;
  color: #312e38;
  padding: 18px;
  border-radius: 10px;
  margin-top: 24px;
  font-weight: 500;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;

export { Container };
