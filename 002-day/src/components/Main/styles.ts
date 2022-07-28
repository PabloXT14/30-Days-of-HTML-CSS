import styled, { keyframes } from "styled-components";

/* ===== ANIMATIONS ===== */
const is_gx = keyframes`
  0%,
  10%,
  100% {
    width: 25rem;
  }
  30%,
  50% {
    width: 31.25rem;
  }
`;

/* ===== COMPONENTS ===== */
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

  button {
    width: 11.25rem;
    height: 3.125rem;
    border-radius: 25rem;
    margin-top: 3.125rem;

    text-transform: uppercase;
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
    
    cursor: pointer;
  }

  .title {
    font-size: 2.125rem;
    font-weight: 700;
    /* line-height: 3; */
    text-align: center;
    color: ${(props) => props.theme.dark};
    margin-bottom: 2rem;
  }

  .description {
    font-size: 0.875rem;
    letter-spacing: 0.25px;
    text-align: center;
    line-height: 1.6;
  }

  /* ===== SET ANIMATIONS ===== */
  .is-gx {
    animation: ${is_gx} 1.25s;
  }

  .is-txr {
    left: calc(100% - 400px);
    transition: 1.25s;
    transform-origin: left;
  }
  .is-txl {
    left: 0;
    transition: 1.25s;
    transform-origin: right;
  }
  .is-z200 {
    z-index: 200;
    transition: 1.25s;
  }

  .is-hidden {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transition: all 1.25s ease;
  }
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

    .form__icons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.7rem;
    }

    .form__icon {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0.4rem;

      color: ${(props) => props.theme.dark};
      
      opacity: 0.5;
      border: 2px solid ${(props) => props.theme.dark};
      border-radius: 50%;
      
      transition: all .15s ease;

      &:hover {
        opacity: 1;
        transition: all .15s ease;
        cursor: pointer;
      }

      svg {
        font-size: 1.2rem;
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

    .form__link {
      text-decoration: none;
      color: ${(props) => props.theme.dark};
      font-size: 0.9rem;
      margin-top: 1.5rem;
      border-bottom: 1px solid ${(props) => props.theme.secondary};
      line-height: 2;
    }

  }
`;

export const SignUpContainer = styled(BaseSignContainer)`
  z-index: 100;
  left: calc(100% - 37.5rem);
`;

export const SignInContainer = styled(BaseSignContainer)`
  left: calc(100% - 37.5rem);
  z-index: 0;
`;

export const SwitchContainer = styled.div`
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  top: 0;
  left: 0;
  height: 100%;
  width: 25rem;
  padding: 3.125rem;

  background: ${(props) => props.theme.primary};
  overflow: hidden;
  box-shadow: 
    4px 4px 10px ${(props) => props.theme.box_shadow_1},
    -4px -4px 10px ${(props) => props.theme.box_shadow_2};

  transition: all 1.25s ease;

  .switch__circle {
    position: absolute;
    width: 31.25rem;
    height: 31.25rem;
    border-radius: 50%;

    bottom: -60%;
    left: -60%;

    background: ${(props) => props.theme.primary};
    box-shadow:
      inset 8px 8px 12px ${(props) => props.theme.box_shadow_1},
      inset -8px -8px 12px ${(props) => props.theme.box_shadow_2};

    transition: all 1.25s ease;
  }

  .switch__circle--t {
    top: -30%;
    left: 60%;
    width: 18.75rem;
    height: 18.75rem;
  }

  .switch__container {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 25rem;
    padding: 3.125rem 3.4rem;

    transition: all 1.25s ease;
  }

  .switch__button {
    /* cursor: pointer; */

    &:hover {
      box-shadow:
        6px 6px 10px ${(props) => props.theme.box_shadow_1},
        -6px -6px 10px ${(props) => props.theme.box_shadow_2};
      transform: scale(0.985);
      transition: all .25s ease;
    }

    &:active, &:focus {
      box-shadow: 
        2px 2px 6px ${(props) => props.theme.box_shadow_1},
        -2px -2px 6px ${(props) => props.theme.box_shadow_2};
      transform: scale(0.97);
      transition: all .25s ease;
    }
  }
`;