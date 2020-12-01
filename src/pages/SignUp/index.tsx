import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';

import { Link, useHistory } from 'react-router-dom';
import { Button, Input } from '../../components';
import { Content, Background, Container } from './styles';

import logo from '../../assets/logo.svg';
import { signupValidation } from '../../utils/validations';
import { useToast } from '../../contexts/toast';
import { useAuthDispatch, SignupData } from '../../contexts/auth';

const SignUp: React.FC = () => {
  const { signUp } = useAuthDispatch();
  const { addToast } = useToast();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signupValidation),
  });

  const onSubmit = useCallback(async (credentials: SignupData) => {
    try {
      await signUp(credentials);
      addToast({
        type: 'success',
        title: 'Registrado com sucesso',
        description: 'Realize seu logon na pagina a seguir',
      });

      history.push('/');
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Ocorreu um erro no cadastro',
      });
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="Go Barber" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            error={errors.name?.message}
            name="name"
            icon={FiUser}
            type="text"
            placeholder="Nome"
            ref={register}
          />
          <Input
            error={errors.email?.message}
            name="email"
            icon={FiMail}
            type="text"
            placeholder="E-mail"
            ref={register}
          />
          <Input
            error={errors.password?.message}
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
            ref={register}
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        <Link to="/">
          <FiArrowLeft size={24} />
          Voltar para pagina de login
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
