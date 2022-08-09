import styled, { css } from 'styled-components'

interface CustomButtonProps {
  buttonType?: 'primary' | 'secondary' | 'tertiary'
}

export const FormContainer = styled.form`
  padding: 1rem;
  max-width: 25rem;
  margin: 0 auto;
`

export const Segment = styled.div`
  padding: 2rem 0;
  text-align: center;
`

export const InputField = styled.label`
  display: block;
  margin-bottom: 1.5rem;
  width: 100%;

  input {
    border: 0;
    outline: 0;
    font-size: 1rem;
    border-radius: 20rem;
    padding: 1rem;
    background: ${(props) => props.theme.primary};
    text-shadow: 1px 1px 0 ${(props) => props.theme.tertiary};

    margin-right: 0.5rem;
    box-shadow: inset 2px 2px 5px ${(props) => props.theme.secondary},
      inset -5px -5px 10px ${(props) => props.theme.tertiary};
    width: 100%;
    transition: all 0.2s ease-in-out;
    appearance: none;
    -webkit-appearance: none;

    &:focus {
      box-shadow: inset 1px 1px 5px ${(props) => props.theme.secondary},
        inset -1px -1px 2px ${(props) => props.theme.tertiary};
    }
  }
`

export const CustomButton = styled.button.attrs({
  type: 'button',
})<CustomButtonProps>`
  border: 0;
  outline: 0;
  font-size: 1rem;
  border-radius: 20rem;
  padding: 1rem;
  background: ${(props) => props.theme.primary};
  text-shadow: 1px 1px 0 ${(props) => props.theme.tertiary};

  color: ${(props) => props.theme.color_1};
  font-weight: bold;
  box-shadow: -5px -5px 20px ${(props) => props.theme.tertiary},
    5px 5px 20px ${(props) => props.theme.secondary};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: -2px -2px 5px ${(props) => props.theme.tertiary},
      2px 2px 5px ${(props) => props.theme.secondary};
  }

  &:active {
    box-shadow: 1px 1px 2px ${(props) => props.theme.secondary},
      -1px -1px 2px ${(props) => props.theme.tertiary};
  }

  svg {
    margin-right: 0.5rem;
  }

  ${(props) =>
    props.buttonType === 'secondary' &&
    css`
      border-radius: 0.5rem;
      line-height: 0;
      width: 3rem;
      height: 3rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 0 0.5rem;

      svg {
        /* width: 1.25rem;
        height: 1.25rem; */
        margin: 0;
        font-size: 2rem;
      }
    `}

  ${(props) =>
    props.buttonType === 'tertiary' &&
    css`
      display: block;
      width: 100%;
      color: ${(props) => props.theme.color_2};
    `}
`

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  label {
    margin: 0;
    flex: 1;
  }
`
