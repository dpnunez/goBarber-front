import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';

import { Button, Input } from '../../components';
import { Content, Background, Container } from './styles';

import logo from '../../assets/logo.svg';
import { signupValidation } from '../../utils/validations';

const SignUp: React.FC = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(signupValidation),
  });

  const onSubmit = useCallback(() => {
    try {
      console.log('signup');
    } catch (err) {
      console.log(err);
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

        <a href="/">
          <FiArrowLeft size={24} />
          Voltar para pagina de login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
