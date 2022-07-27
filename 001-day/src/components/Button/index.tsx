import { ButtonContainer, ButtonContainerProps } from "./styles";

interface ButtonProps {
  text: string;
  color: 'bg_button_1' | 'bg_button_2' | 'bg_button_3';
}

export function Button(props: ButtonProps) {
  return (
    <ButtonContainer 
      href="#"
      color={props.color}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.text}
    </ButtonContainer>
  );
}