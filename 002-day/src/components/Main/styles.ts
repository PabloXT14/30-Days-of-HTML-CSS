import styled from "styled-components";

export const MainContainer = styled.main`
  position: relative;
  width: 62.5rem;
  min-width: 62.5rem;
  height: 37.5rem;
  min-height: 37.5rem;
  padding: 1.5rem;
  background: ${(props) => props.theme.primary};
  box-shadow: 10px 10px 10px ${(props) => props.theme.box_shadow_1},
  -10px -10px 10px ${(props) => props.theme.box_shadow_2};
  border-radius: 0.75rem;
  overflow: hidden;
`;

const BaseSignContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 37.5rem;
  height: 100%;
  padding: 1.5rem;
  background: ${(props) => props.theme.primary};
  transition: all 1.25s ease;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .title {
      font-size: 2.125rem;
      font-weight: 700;
      line-height: 3;
      color: ${(props) => props.theme.dark};
    }

    svg {
      color: ${(props) => props.theme.dark};
      object-fit: contain;
      margin: 0 5px;
      opacity: 0.5;
      transition: all .15s ease;

      &:hover {
        opacity: 1;
        transition: all .15s ease;
        cursor: pointer;
      }
    }

    .form__input {
      width: 21.8rem;
      height: 2.5rem;
      margin: 0.25rem 0;
      padding: 1.5rem;

      font-size: 1rem;
      letter-spacing: 0.15px;
      border: none;
      outline: none;
      font-family: 'Montserrat', sans-serif;

      background: ${(props) => props.theme.primary};
      border-radius: 8px;
      box-shadow: 
        inset 2px 2px 4px ${(props) => props.theme.box_shadow_1},
        inset -2px -2px 4px ${(props) => props.theme.box_shadow_2};

      transition: all .25s ease;

      &:focus {
        box-shadow: 
          inset 4px 4px 4px ${(props) => props.theme.box_shadow_1},
          inset -4px -4px 4px ${(props) => props.theme.box_shadow_2};
      }
    }

    .form__span {
      font-size: 0.8rem;
      margin-top: 1.875rem;
      margin-bottom: 0.75rem;
    }

    .btn__submit {
      width: 11.25rem;
      height: 3.125rem;
      border-radius: 25rem;
      margin-top: 3.125rem;
      font-weight: 700;
      font-size: 0.875rem;
      letter-spacing: 1.15px;

      background: ${(props) => props.theme.third};
      color: ${(props) => props.theme.box_shadow_2};
      border: none;
      outline: none;
      box-shadow: 
        8px 8px 16px ${(props) => props.theme.box_shadow_1},
        -8px -8px 16px ${(props) => props.theme.box_shadow_2};
    }
  }
`;

export const SignUpContainer = styled(BaseSignContainer)`

`;

export const SignInContainer = styled(BaseSignContainer)`

`;

export const SwitchContainer = styled.div`

`;