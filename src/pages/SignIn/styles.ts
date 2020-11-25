import styled from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/signin-background.png';

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

    h1 {
      margin-bottom: 24px;
    }

    input {
      width: 100%;
      background-color: #232129;
      border: 2px solid #232129;
      border-radius: 10px;
      color: #f4ede8;
      padding: 18px;

      & + input {
        margin-top: 8px;
      }

      &::placeholder {
        color: #666360;
      }
    }

    button {
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
    }

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
    color: #ff9000;
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
