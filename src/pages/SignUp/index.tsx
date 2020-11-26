import React from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

import { Button, Input } from '../../components';
import { Content, Background, Container } from './styles';

import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values: object) => {
    console.log(values);
  };

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="Go Barber" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="name"
            icon={FiUser}
            type="text"
            placeholder="Nome"
            ref={register}
          />
          <Input
            name="email"
            icon={FiMail}
            type="text"
            placeholder="E-mail"
            ref={register}
          />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
            ref={register}
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
