import * as Yup from 'yup';

const signupValidation = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('E-mail obrigatório'),
  password: Yup.string().min(6, 'No mínimo 6 dígitos'),
});

export { signupValidation };
