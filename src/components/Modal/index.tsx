import { useContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { forSchemaCreatTec } from "../../validation";
import { TechContexts } from "../../context/TechContext";

import { CgDanger } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai"
import ModalStyle from "./style";

interface IDataCreatTechs{
  title: string;
  status: string;
}


function Modal() {
  const { handleCreatTecForm } = useContext(TechContexts)

  const { toggleModal } = useContext(TechContexts)

  const { register, handleSubmit, formState: { errors }, } = useForm<IDataCreatTechs>({
    resolver: yupResolver(forSchemaCreatTec),
  })


  return (
    <ModalStyle>
      <form onSubmit={handleSubmit(handleCreatTecForm)}>
        <section className="header-form">
          <p>Cadastrar Tecnologia</p>
          <AiOutlineClose onClick={toggleModal}  />
        </section>
        <div>
          <label htmlFor="title">Nome</label>
          <input  id="title" type="text" placeholder="Tecnologia" {...register("title")} />
          {errors.title && (
              <span>
                <CgDanger />
                {errors.title.message}
              </span>
            )
          }
        </div>
        <div>
          <label htmlFor="status">Selecionar status</label>
          <select id="status" {...register("status")}>
          <option value="">Selecione Status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status && (
              <span>
                <CgDanger />
                {errors.status.message}
              </span>
            )
          }
        </div>
        <div><button type="submit">Cadastrar Tecnologia</button></div>
      </form>
    </ModalStyle>
  )
  
}

export default Modal;
