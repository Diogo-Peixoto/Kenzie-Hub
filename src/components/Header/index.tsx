import HeaderStyle from "./style";
import { Logo } from "../../assets/Logo";
import { Link } from "react-router-dom";

interface IHeaderProps{
  children?: string;
}


function Header({ children }:IHeaderProps) {

  if(children){
    return (
      <HeaderStyle>
        <figure>
          <Logo />
        </figure>
  
        <Link onClick={()=> localStorage.clear()} to={"/"}>
        { children }
        </Link>
      </HeaderStyle>
    );
  }else{
    return(
      <HeaderStyle>
        <figure>
          <Logo />
        </figure>
  
      </HeaderStyle>
    )
  }
}

export default Header;
