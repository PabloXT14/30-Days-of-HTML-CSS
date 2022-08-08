import styled from 'styled-components'

export const MainDial = styled.div`
  position: relative;
  margin: auto;
  margin-top: 13.75rem;
  background-color: ${(props) => props.theme.bg_secondary};
  height: 15.625rem;
  width: 15.625rem;
  border-radius: 50%;
  box-shadow: inset 2px -2px 8px ${(props) => props.theme.box_shadow_1},
    inset -2px 2px 8px ${(props) => props.theme.box_shadow_1};

  &::before {
    content: '';
    position: absolute;
    margin: auto;
    top: 0.25rem;
    left: 0.25rem;
    background: ${(props) => props.theme.secondary};
    height: 15rem;
    width: 15rem;
    border: 1px solid ${(props) => props.theme.secondary};
    border-radius: 50%;
    box-shadow: inset 3px 3px 3px ${(props) => props.theme.box_shadow_2},
      inset 8px 5px ${(props) => props.theme.box_shadow_3},
      inset -2.5px -1px 2.5px ${(props) => props.theme.box_shadow_2},
      inset -5.5px -3px ${(props) => props.theme.box_shadow_3};
  }

  &::after {
    content: '';
    position: absolute;
    margin: auto;
    top: 1.5625rem;
    left: 1.5625rem;
    background: ${(props) => props.theme.bg_tertiary};
    height: 12.5rem;
    width: 12.5rem;
    border-radius: 50%;
  }
`

export const Screen = styled.div`
  position: absolute;
  width: 12.5rem;
  height: 12.5rem;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.bg_4},
    ${(props) => props.theme.bg_5}
  );
  border-radius: 50%;
  top: 10%;
  left: 10%;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    width: 12.5rem;
    height: 12.5rem;
    background: linear-gradient(
      5deg,
      ${(props) => props.theme.bg_6},
      ${(props) => props.theme.bg_7}
    );
    -webkit-mask: linear-gradient(
      ${(props) => props.theme.bg_tertiary},
      transparent
    );
    mask: linear-gradient(${(props) => props.theme.bg_tertiary}, transparent);
    border-radius: 50%;
    top: 0%;
    left: 0%;
    z-index: 1;
  }
`

export const Hands = styled.div`
  position: absolute;
  height: 5rem;
  width: 0.3125rem;
  background: ${(props) => props.theme.bg_tertiary};
  top: 25%;
  left: 60%;
  border-radius: 50px;
  transform: rotate(45deg);
  box-shadow: 2px 2px 1px ${(props) => props.theme.bg_6};
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    height: 3.75rem;
    width: 0.625rem;
    background: ${(props) => props.theme.bg_tertiary};
    bottom: -38%;
    right: 500%;
    border-radius: 50px;
    box-shadow: 2px 2px 1px ${(props) => props.theme.bg_6};
    transform: rotate(-100deg);
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    height: 6.25rem;
    width: 0.125rem;
    background: ${(props) => props.theme.bg_tertiary};
    top: 65%;
    left: 330%;
    border-radius: 50px;
    box-shadow: -0.5px 0.5px 1px ${(props) => props.theme.bg_6};
    transform: rotate(150deg);
    z-index: 2;
  }
`

export const HandHolder = styled.div`
  position: absolute;
  height: 0.8125rem;
  width: 0.8125rem;
  background: ${(props) => props.theme.bg_tertiary};
  top: 48.5%;
  left: 48.5%;
  border-radius: 50%;
  box-shadow: 0.5px 0.5px 0.5px ${(props) => props.theme.bg_6},
    -0.5px 0.5px 0.5px ${(props) => props.theme.bg_6};
  z-index: 3;

  &::after {
    content: '';
    position: absolute;
    height: 0.3125rem;
    width: 0.3125rem;
    border-radius: 50%;
    background: ${(props) => props.theme.bg_4};
    top: 30%;
    left: 30%;
  }
`

export const StrapHolderUp1 = styled.div``

export const CircleHide11 = styled.div``

export const LineHide11 = styled.div``

export const StrapHolderUp2 = styled.div``

export const CircleHide12 = styled.div``

export const LineHide12 = styled.div``

export const StrapHolderDown1 = styled.div``

export const CircleHide21 = styled.div``

export const LineHide21 = styled.div``

export const StrapHolderDown2 = styled.div``

export const CircleHide22 = styled.div``

export const LineHide22 = styled.div``

export const Strap1 = styled.div``

export const Strap2 = styled.div``

export const BackStrap = styled.div``

export const Button1 = styled.div``

export const ButtonHide = styled.div``

export const Button2 = styled.div``
