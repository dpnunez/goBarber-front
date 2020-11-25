import React from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';

import { Content, Background, Container } from './styles';

import logo from '../../assets/logo.svg';

import { Button, Input } from '../../components';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="Go Barber" />
        <form>
          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="/">
          <FiArrowLeft size={24} />
          Voltar para pagina de login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
