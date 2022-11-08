import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forSchemaRegister } from "../../validation";

import Header from "../../components/Header";
import Button from "../../components/Button";
import { CgDanger } from "react-icons/cg";
import { FormAllPage, FormStyle } from "../../components/Forms/style";

import "react-toastify/dist/ReactToastify.css";

import { UserContexts } from "../../context/UserContext";
import { useContext } from "react";


export interface IDataRegister{
  name:string;
  email: string;
  password:string;
  passwordConfirm?:string;
  contact: string;
  bio: string;
  course_module: string;
}

function Register() {
  const { handleRegisterForm } = useContext(UserContexts)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataRegister>({
    resolver: yupResolver(forSchemaRegister),
  });


  return (
    <FormAllPage>
      <Header>Voltar</Header>
      <main>
        <div>
          <h2>Crie sua conta</h2>
          <p>Rapido e grátis, vamos nessa</p>
        </div>
        <FormStyle onSubmit={handleSubmit(handleRegisterForm)}>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            {errors.name && (
              <span>
                <>
                  <CgDanger />
                  {errors.name.message} 
                </>
              </span>
            )}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            {errors.email && (
              <span>
                <>
                  <CgDanger />
                  {errors.email.message}
                </>
              </span>
            )}
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            {errors.password && (
              <span>
                <>
                  <CgDanger />
                  {errors.password.message}
                </>
              </span>
            )}
          </div>
          <div>
            <label htmlFor="passwordCorfirm">Confirmar Senha</label>
            <input
              id="passwordCorfirm"
              type="password"
              placeholder="Digite aqui sua senha novamente"
              {...register("passwordConfirm")}
            />
            {errors.passwordConfirm && (
              <span>
                <>
                  <CgDanger />
                  {errors.passwordConfirm.message}
                </>
              </span>
            )}
          </div>
          <div>
            <label htmlFor="contact">Contato</label>
            <input
              id="contact"
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            {errors.contact && (
              <span>
                <>
                  <CgDanger />
                  {errors.contact.message}
                </>
              </span>
            )}
          </div>
          <div>
            <label htmlFor="password">Bio</label>
            <input
              id="bio"
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            {errors.bio && (
              <span>
                <>
                  <CgDanger />
                  {errors.bio.message}
                </>
              </span>
            )}
          </div>
          <div>
            <label htmlFor="course_module">Selecionar módulo</label>
            <select
              id="course_module"
              {...register("course_module")}
            >
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
              </option>
            </select>
            {errors.course_module && (
              <span>
                <>
                  <CgDanger />
                  {errors.course_module.message}
                </>
              </span>
            )}
          </div>
          <Button color={"--color-primary-disable"}>Cadastrar</Button>
        </FormStyle>
      </main>
    </FormAllPage>
  );
}

export default Register;
