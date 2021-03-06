import React, { useCallback } from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Link, useHistory } from 'react-router-dom';
import { Content, Background, Container } from './styles';
import { Button, Input } from '../../components';

import logo from '../../assets/logo.svg';
import { signinValidation } from '../../utils/validations';
import { useAuthDispatch } from '../../contexts/auth';
import { useToast } from '../../contexts/toast';

const SignIn: React.FC = () => {
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(signinValidation),
  });
  const history = useHistory();

  const { addToast } = useToast();
  const { signIn } = useAuthDispatch();

  const onSubmit = useCallback(
    async credentials => {
      try {
        await signIn(credentials);
        history.push('/dashboard');
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao realizar o logon',
          description: 'Tente novamente',
        });
      }
    },
    [addToast, signIn, history],
  );

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

        <Link to="/signup">
          <FiLogIn size={24} />
          Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
