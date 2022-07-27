import styled, { keyframes } from "styled-components";

/* ===== TIPAGENS ===== */
export interface ButtonContainerProps {
  color: 'bg_button_1' | 'bg_button_2' | 'bg_button_3'
}

/* ===== ANIMATIONS ===== */
const animate1 = keyframes`
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
`;

const animate2 = keyframes`
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
`;

const animate3 = keyframes`
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
`;

const animate4 = keyframes`
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
`;

/* ===== COMPONENTS ===== */
export const ButtonContainer = styled.a<ButtonContainerProps>`
  position: relative;
  display: inline-block;
  padding: 1.5rem 2rem;
  margin: 2.5rem 0;
  color: ${(props) => props.theme[props.color]};
  text-decoration: none;
  text-transform: uppercase;

  letter-spacing: 0.25rem;
  overflow: hidden;
  margin-right: 3rem;

  transition: all .5s ease;

  &:hover {
    background: ${(props) => props.theme[props.color]};
    color: ${(props) => props.theme.bg_body};

    box-shadow: 
      0 0 5px ${(props) => props.theme[props.color]},
      0 0 25px ${(props) => props.theme[props.color]},
      0 0 50px ${(props) => props.theme[props.color]},
      0 0 200px ${(props) => props.theme[props.color]};
  }

  span {
    position: absolute;
    display: block;

    /* 
    animation-name : nome atribuído no @keyframes.
    animation-duration : O tempo de duração da animação.
    animation-timing-function : velocidade com que a animação é executada (easing | linear)
    animation-delay : o delay para iniciar a animação. 
    */


    &:nth-child(1) {
      top: 0;
      left: 0;
      width: 100%;
      height: 0.125rem;
      background: linear-gradient(90deg, transparent, ${(props) => props.theme[props.color]});
      animation: ${animate1} 1s linear infinite;// 1s = animation-duration
    }

    &:nth-child(2) {
      top: -100%;
      right: 0;
      width: 0.125rem;
      height: 100%;
      background: linear-gradient(180deg, transparent, ${(props) => props.theme[props.color]});
      animation: ${animate2} 1s linear infinite;
      animation-delay: 0.25s;
    }

    &:nth-child(3) {
      bottom: 0;
      right: 0;
      width: 100%;
      height: 0.125rem;
      background: linear-gradient(270deg, transparent, ${(props) => props.theme[props.color]});
      animation: ${animate3} 1s linear infinite;
      animation-delay: 0.5s;
    }

    &:nth-child(4) {
      bottom: -100%;
      left: 0;
      width: 0.125rem;
      height: 100%;
      background: linear-gradient(360deg, transparent, ${(props) => props.theme[props.color]});
      animation: ${animate4} 1s linear infinite;
      animation-delay: 0.75s;
    }
  }
`;

