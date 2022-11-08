import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forSchemaLogin } from "../../validation";

import Header from "../../components/Header";
import Button from "../../components/Button";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContexts } from "../../context/UserContext";

import { CgDanger } from "react-icons/cg";
import { FormAllPage, FormStyle } from "../../components/Forms/style";

export interface IDataLogin{
  email: string;
  password:string;
}

function Login() {
  const { handleLoginForm } = useContext(UserContexts)


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataLogin>({
    resolver: yupResolver(forSchemaLogin),
  });


  return (
    <FormAllPage onSubmit={handleSubmit(handleLoginForm)}>
      <Header />
      <main>
        <div>
          <h2>Login</h2>
        </div>
        <FormStyle>
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

          <Button color={"--color-primary"}>Entrar</Button>
        </FormStyle>
        <div>
          <p>Ainda não possui uma conta?</p>
          <Link to={"/register"}>Cadastre-se</Link>
        </div>
      </main>
    </FormAllPage>
  );
}

export default Login;
