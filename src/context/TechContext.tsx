import { createContext, useContext, useState } from "react";
import { UserContexts } from "./UserContext";

import { toast } from "react-toastify";
import api from "../services/api";

interface ITechProvider{
  children: React.ReactNode
}

interface IDataCreatTechs{
  title: string;
  status: string;
}

interface ITechContextsProps{
  handleCreatTecForm: (data: IDataCreatTechs)=> void;
  handleDeleteTecForm: (id:string | number)=> void;
  register: boolean;
  toggleModal: ()=> void;

}


export const TechContexts = createContext({} as ITechContextsProps);

function TechProvider({ children }:ITechProvider) {
  const { checkToken } = useContext(UserContexts)
  const [ register, setRegister ] = useState(false)

  async function handleCreatTecForm(data: IDataCreatTechs ){
      try {
        await api.post('/users/techs', data)
        checkToken()
        setRegister(false)
      } catch (error) {
        toast.error("Error na Criação!")
      }
  }

  async function handleDeleteTecForm(id:string | number){
    try {
      await api.delete(`/users/techs/${id}`)
      checkToken()
    } catch (error) {
      toast.error("Item não excuido!")
    }
  }

  function toggleModal(){
    if(register){
      setRegister(false)
    }else{
      setRegister(true)
    }
  }


  return (
    <TechContexts.Provider value={{handleCreatTecForm, handleDeleteTecForm, register, toggleModal}}>
        {children}
    </TechContexts.Provider>
  );
}

export default TechProvider;
