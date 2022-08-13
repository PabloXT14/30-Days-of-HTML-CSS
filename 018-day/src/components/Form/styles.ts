import styled, { css, keyframes } from 'styled-components'

/* ===== TYPES ====== */
interface SignInContainerProps {
  isRightPanelActive: boolean
}

interface SignUpContainerProps {
  isRightPanelActive: boolean
}

interface OverlayContainerProps {
  isRightPanelActive: boolean
}

/* ===== ANIMATIONS ===== */
const show = keyframes`
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
`

/* ===== COMPONENTS ===== */
export const FormContainer = styled.div`
  margin: 0 auto;
  height: ${(props) => props.theme.max_height_default};
  width: 100%;
  max-width: ${(props) => props.theme.max_width_default};
  overflow: hidden;
  position: relative;
  background: ${(props) => props.theme.white_500};
  border-radius: ${(props) => props.theme.border_radius_default};
  box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
    0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
`

export const FormTitle = styled.h2`
  font-weight: 300;
  margin: 0;
  margin-bottom: 1.25rem;
`

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.gray_500};
  font-size: 0.9rem;
  margin: 1.5rem 0;
`

const BaseSignContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;

  form {
    background: ${(props) => props.theme.white_500};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 3rem;
    height: 100%;
    text-align: center;

    input {
      background: ${(props) => props.theme.white_900};
      border: none;
      padding: 0.9rem 0.9rem;
      margin: 0.5rem 0;
      width: 100%;
    }

    button {
      margin-top: 1.5rem;
    }
  }
`

export const SignUpContainer = styled(BaseSignContainer)<SignUpContainerProps>`
  left: 0;
  opacity: 0;
  width: 50%;
  z-index: 1;
  ${(props) =>
    props.isRightPanelActive &&
    css`
      animation: ${show} 0.6s;
      opacity: 1;
      transform: translateX(100%);
      z-index: 5;
    `}
`

export const SignInContainer = styled(BaseSignContainer)<SignInContainerProps>`
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) =>
    props.isRightPanelActive &&
    css`
      transform: translateX(100%);
    `}
`

export const OverlayContainer = styled.div<OverlayContainerProps>`
  box-sizing: content-box;
  height: 100%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: transform 0.6s ease-in-out;
  width: 50%;
  z-index: 100;

  ${(props) =>
    props.isRightPanelActive &&
    css`
      transform: translateX(-100%);
    `}

  .overlay {
    position: relative;
    background: ${(props) => props.theme.blue_100}
      url('/src/assets/background.jpg') center/cover no-repeat fixed;
    height: 100%;
    width: 200%;
    left: -100%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;

    ${(props) =>
      props.isRightPanelActive &&
      css`
        transform: translateX(50%);
      `}

    .overlay__panel {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 50%;
      text-align: center;
      transform: translateX(0);
      transition: transform 0.6s ease-in-out;

      &.overlay--left {
        transform: translateX(-20%);
        ${(props) =>
          props.isRightPanelActive &&
          css`
            transform: translateX(0);
          `}
      }

      &.overlay--right {
        right: 0;
        transform: translateX(0);
        ${(props) =>
          props.isRightPanelActive &&
          css`
            transform: translateX(20%);
          `}
      }
    }
  }
`

export const CustomButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.blue_500};
  background-image: linear-gradient(
    90deg,
    ${(props) => props.theme.blue_500} 0%,
    ${(props) => props.theme.blue_100} 74%
  );
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.blue_500};
  color: ${(props) => props.theme.white_500};
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding: 0.9rem 4rem;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`
