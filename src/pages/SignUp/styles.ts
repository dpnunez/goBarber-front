import styled from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/signup-background.png';

const Container = styled.main`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

const Content = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;

  align-items: center;
  place-content: center;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    a {
      display: block;
      margin-top: 24px;
      color: #f4ede8;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    color: #f4ede8;
    text-decoration: none;

    svg {
      margin-right: 18px;
    }
  }
`;

const Background = styled.div`
  flex: 1;
  background: url('${background}') no-repeat center;
  background-size: cover;
`;

export { Content, Background, Container };
