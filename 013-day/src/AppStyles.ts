import styled from 'styled-components'

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.bg_primary};
  z-index: -1;
  transition: all 0.5s ease;
`

export const InputCheckbox = styled.input.attrs({ type: 'checkbox' })`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label {
    transform: rotate(180deg);
  }

  &:checked ~ .s {
    transform: rotate(-180deg);
  }
`

export const Switch = styled.label`
  position: relative;
  text-indent: -999999px;
  width: 12.5rem;
  height: 6.25rem;
  background: ${(props) => props.theme.bg_secondary};
  display: block;
  border-radius: 100px;
  transition: all 0.5s ease;
`

export const S = styled.div`
  position: absolute;
  top: 44.8%;
  right: 50.5vw;
  width: 5.3125rem;
  height: 5.3125rem;
  background: ${(props) => props.theme.bg_primary};
  /* background: red; */
  border-radius: 90px;
  transition: 0.5s;
  transform-origin: 105% 50%;
  pointer-events: none;
`
