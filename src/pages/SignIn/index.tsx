import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Content, Background, Container } from './styles';

import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Go Barber" />
        <form>
          <h1>Faça seu login</h1>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>
          <a href="/">esqueci minha senha</a>
        </form>

        <a href="/">
          <FiLogIn size={24} />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
