import { useContext } from "react";
import { TechContexts } from "../../context/TechContext";
import { UserContexts } from "../../context/UserContext";

import { BsTrash } from "react-icons/bs"
import { IoIosAdd } from "react-icons/io"

import Header from "../../components/Header";
import Modal from "../../components/Modal";
import DashboardStyle, { UlStyle } from "./style";

function Dashboard(){
    const { handleDeleteTecForm, toggleModal, register } = useContext(TechContexts)
    const { user } = useContext(UserContexts)


    return (

        <>
            <DashboardStyle>
                <Header>
                    Sair
                </Header>
                <main>
                    <h2>Olá, {user.name}</h2>
                    <p>{user.course_module}</p>
                    <section>
                        <div>
                            <h3>Tecnologias</h3>
                            <IoIosAdd onClick={()=> toggleModal()} />
                        </div>
                        <UlStyle>
                            {
                                user.techs.map(element => 
                                    <li key={element.id}>
                                        <h4>{element.title}</h4>
                                        <div>
                                            <p>{element.status}</p>
                                            <BsTrash  onClick={()=> handleDeleteTecForm(element.id)}/>
                                        </div>
                                    </li> )
                            }
                        </UlStyle>
                    </section>
                </main>
                </DashboardStyle>
                {
                    register && <Modal />
                }
        </>
    )
}

export default Dashboard;