import styled, { keyframes, css } from "styled-components";

/* ===== TYPE ===== */
interface SearchContainerProps {
  isLoading: boolean;
}

/* ===== ANIMATIONS ===== */
const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

/* ===== COMPONENTS ===== */
export const SearchContainer = styled.div<SearchContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem auto;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  max-width: 31.25rem;
  border-radius: 10px;
  background: ${(props) => props.theme.bg_color_1};
  transition: all 0.5s;

  &:hover, &:focus {
    background: ${(props) => props.theme.bg_color_2};
  }
  svg {
    display: block;
    margin: 0;
  }

  button, input {
    appearance: none;
    background: transparent;
    border: 0;
    color: inherit;
    font: inherit;
    outline: 0;
  }

  button {
    cursor: pointer;
    padding: 0 0.25rem;
  }

  input {
    flex: 1;

    &::placeholder {
      color: ${(props) => props.theme.secondary};
    }
  }

  ${(props) => 
    props.isLoading &&
    css`
      button {
        display: none;
      }

      .spinner {
        display: block;
      }
    `}
`

export const Spinner = styled.div`
  animation: ${spinner} 1s infinite linear;
  display: none;
  padding: 0 0.25rem;
`

export const Note = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.text_color_1};
`