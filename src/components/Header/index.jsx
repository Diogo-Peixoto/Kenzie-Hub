import { ContainerHeader } from "./style";
import Logo from "../../assets/logo.svg";
import InputSearch from "../InputSearch";

function Header({ setSearch }) {
  return (
    <ContainerHeader>
      <header className="container">
        <figure>
          <img src={Logo} alt="" />
        </figure>
        <InputSearch setSearch={setSearch} />
      </header>
    </ContainerHeader>
  );
}

export default Header;
