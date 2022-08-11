import styled, { keyframes } from "styled-components";

// ANIMATIONS
const anime = keyframes`
  0% {
    width: 3.75rem;
    height: 3.75rem;
    background: #f0f0f0;
    box-shadow:
      0 0 0 #cccccc,
      0 0 0 #ffffff,
      inset 10px 10px 10px #cccccc,
      inset -10px -10px 10px #ffffff;
  }

  25% {
    width: 3.75rem;
    height: 3.75rem;
    background: #f8f8f8;
    box-shadow: 
      10px 10px 10px #cccccc,
      10px 10px 10px #ffffff,
      inset 0 0 0 #cccccc,
      inset 0 0 0 #ffffff;
  }

  50% {
    width: 3.75rem;
    height: 15rem;
    background: #f8f8f8;
    box-shadow:
      10px 10px 10px #cccccc,
      10px 10px 10px #ffffff,
      inset 0 0 0 #cccccc,
      inset 0 0 0 #ffffff;
  }

  100% {
    width: 30rem;
    height: 15rem;
    background: #fafafa;
    box-shadow:
      40px 40px 40px #cccccc,
      0 0 0 #ffffff,
      inset 0 0 0 #cccccc,
      inset 2px 2px 2px #ffffff;
  }
`

// COMPONENTS

export const AppContainer = styled.div`
  background: #f0f0f0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const Box = styled.div`
  border-radius: 20px;
  width: 3.75rem;
  height: 3.75rem;
  background: #f0f0f0;
  box-shadow: 
    0 0 0 #cccccc,
    0 0 0 #ffffff,
    inset 10px 10px 10px #cccccc,
    inset -10px -10px 10px #ffffff;
    animation: ${anime} 3s cubic-bezier(0.16, 1, 0.3, 1) 1s infinite alternate;
`