import { AnchorHTMLAttributes } from "react";
import { ButtonColorOptions, ButtonContainer } from "./styles";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  color?: ButtonColorOptions;
}

export function Button({ color = 'bg_button_1', text, ...rest}: ButtonProps) {
  return (
    <ButtonContainer
      color={color}
      {...rest}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </ButtonContainer>
  );
}