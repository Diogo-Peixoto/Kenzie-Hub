import ButtonStyle from "./style";

interface IButtonProps{
  children: string;
  color: string;
}

function Button({ children, color }: IButtonProps) {
  return <ButtonStyle color={color}>{children}</ButtonStyle>;
}

export default Button;
