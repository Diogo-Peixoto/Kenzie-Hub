import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IDataLogin } from "../pages/Login";
import { IDataRegister } from "../pages/Register";
import api from "../services/api";

interface IUserProvider{
  children: React.ReactNode
}

interface ITechsUser{
  id: string;
  title: string;
  status: string
}

interface IUser{
  avatar_url: string | null;
  bio: string;
  contact: string
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs: ITechsUser[];

}

interface IConterContextProps{
  user: IUser;
  loading: boolean;
  checkToken: () => void;
  handleLoginForm: (data: IDataLogin) => void;
  handleRegisterForm: (data:IDataRegister) => void;
}
interface IResponseLogin{
  token: string;
  user: IUser;
}



export const UserContexts = createContext({} as IConterContextProps);

function UserProvider({ children }: IUserProvider) {
  const [ user, setUser ] = useState<IUser>({} as IUser);
  const [ loading, setLoaging ] = useState(true)


  const navigate = useNavigate();

  async function handleLoginForm(data: IDataLogin) {
    try{
      const res = await api.post<IResponseLogin>("/sessions", data)
      toast.success("Logado com sucesso");
      setUser(res.data.user);

      localStorage.setItem("@TOKEN", res.data.token);
      localStorage.setItem("@USERID", res.data.user.id);

      navigate("/dashboard",{ replace:true });

    }catch(error){
      toast.error("Erro ao Logar!");
      console.error(error)
    }

  }

  async function handleRegisterForm(data: IDataRegister) {
    const { email, password, name, bio, contact, course_module } = data;

    const request = await api
      .post("/users", {
        email,
        password,
        name,
        bio,
        contact,
        course_module,
      })
      .then((res) => {
        toast.success("Registrado com sucesso");
        navigate("/");

        return res;
      })
      .catch((res) => {
        toast.error(res.response.data.message);
        return res;
      });

    return request;
  }

  async function checkToken(){
    const token = localStorage.getItem("@TOKEN")

    if(token){
      try{

        const { data } = await api.get("/profile")
        setUser(data)
        navigate("/dashboard")

      }catch(error){
        localStorage.clear()
      }
   }
   setLoaging(false)
  }

  useEffect(()=>{
    checkToken()
  },[])

  return (
    <UserContexts.Provider value={{ user, loading, checkToken, handleLoginForm, handleRegisterForm}}>{children}</UserContexts.Provider>
  );
}

export default UserProvider;
