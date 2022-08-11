import styled from "styled-components";

export const AppContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 25rem;
  width: 37.5rem;
  background: #f2f2f2;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 0 20px 8px #d0d0d0;

  &:hover .flap {
    &::before {
      left: -70%;
    }

    &::after {
      right: -70%;
    }
  }
`

export const Content = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: justify;
  color: #121214;
  padding: 2.5rem;

  h1 {
    font-weight: 900;
    text-align: center;
  }

  h3 {
    font-weight: 300;
  }
`

export const Flap = styled.div`
  width: 100%;
  height: 100%;

  &::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 50%;
    left: 0%;
    background: #ffffff;
    transition: 1s;
  }

  &::after {
    position: absolute;
    content: '';
    height: 100%;
    width: 50%;
    right: 0%;
    background: #ffffff;
    transition: 1s;
  }
`