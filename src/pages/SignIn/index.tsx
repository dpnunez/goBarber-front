import React, { useCallback } from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Content, Background, Container } from './styles';

import logo from '../../assets/logo.svg';

import { Button, Input } from '../../components';
import { signinValidation } from '../../utils/validations';

const SignIn: React.FC = () => {
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(signinValidation),
  });

  const onSubmit = useCallback(() => {
    try {
      console.log('signin');
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt="Go Barber" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Faça seu login</h1>
          <Input
            name="email"
            icon={FiMail}
            type="text"
            placeholder="E-mail"
            ref={register}
            error={errors.email?.message}
          />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
            ref={register}
            error={errors.password?.message}
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
