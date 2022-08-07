import styled from 'styled-components'

export const HeaderContainer = styled.header`
  color: ${(props) => props.theme.text_color_1};
  margin: 3.3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 280px) {
    h1 {
      font-size: 1rem;
    }
  }
`

export const Toggle = styled.div`
  margin-top: 2rem;
  color: ${(props) => props.theme.text_color_2};
  display: flex;
  align-items: center;

  @media (max-width: 280px) {
    & {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 5rem;
    }
  }
`

export const ToggleButton = styled.div`
  margin: 0 1rem;

  input {
    display: none;

    &:checked + label {
      justify-content: flex-end;
    }
  }

  label {
    background: ${(props) => props.theme.bg_color_1};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 1.6rem;
    width: 3.3rem;
    border-radius: 1.6rem;
    padding: 0.3rem;
    transition: all 0.3s ease;
  }

  .circle {
    background-color: ${(props) => props.theme.bg_color_2};
    height: 1.4rem;
    width: 1.4rem;
    border-radius: 50%;
  }
`
