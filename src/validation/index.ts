import * as yup from "yup";

export const forSchemaRegister = yup.object().shape({
  name: yup.string().required("Nome obrigatorio!"),
  email: yup.string()
    .required("Email obrigatorio!")
    .email("Digite um email valido!"),
  password: yup.string()
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula!")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minuscula!")
    .matches(/(\d)/, "Deve conter ao menos 1 número!")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial!")
    .matches(/.{8,}/, "Deve ter no minimo 8 digitos!")
    .required("Digite uma senha"),
  passwordConfirm: yup.string()
    .oneOf([yup.ref("password"), null], "Senha Diferentes")
    .required("Digite a senha novamente!"),
  contact: yup.string().required("Digite uma opção de contato!"),
  bio: yup.string().required("Digite uma opção de contato!"),
  course_module: yup.string().required("Selecione o seu modulo"),
});

export const forSchemaLogin = yup.object().shape({
  email: yup.string()
    .required("Email obrigatorio!")
    .email("Digite um email valido!"),
  password: yup.string().required("Digite uma senha"),
});

export const forSchemaCreatTec = yup.object().shape({
  title: yup.string().required("Tecnologia obrigatorio!"),
  status: yup.string().required("Status obrigatorio!"),
});
