import React from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';

import { Content, Background, Container } from './styles';

import logo from '../../assets/logo.svg';

import { Button, Input } from '../../components';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Go Barber" />
        <form>
          <h1>Faça seu login</h1>
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>
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
