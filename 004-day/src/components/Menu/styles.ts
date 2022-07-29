import styled from "styled-components";

export const MenuContainer = styled.aside`
  width: 15.625rem;
  height: 100vh;
  padding-left: 1.5rem;

  color: ${(props) => props.theme.secondary_color};
  background-image: linear-gradient(
    30deg, 
    ${(props) => props.theme.bg_color_1}, 
    ${(props) => props.theme.bg_color_2}
  );
  border-top-right-radius: 80px;
`;

export const MenuHeader = styled.h2`
  margin: 0;
  padding: 2.5rem;
`;

export const MenuOption = styled.a`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  padding-left: 1.875rem;
  font-size: 1rem;

  box-shadow: none;

  color: ${(props) => props.theme.secondary_color};
  -webkit-tap-highlight-color: transparent;


  &:hover {
    position: relative;
    color: ${(props) => props.theme.primary_color};
    background: ${(props) => props.theme.secondary_color};
    outline: none;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;

    &::after {
      content: '';
      position: absolute;
      background-color: transparent;
      bottom: 100%;
      right: 0;
      width: 2.2rem;
      height: 2.2rem;
      border-bottom-right-radius: 18px;
      box-shadow: 0 20px 0 0 ${(props) => props.theme.secondary_color};
    }

    &::before {
      content: '';
      position: absolute;
      background-color: transparent;
      top: 100%;
      right: 0;
      height: 2.2rem;
      width: 2.2rem;
      border-top-right-radius: 18px;
      box-shadow: 0 -20px 0 0 ${(props) => props.theme.secondary_color};
    }
  }

  svg {
    margin-right: 0.25rem;
  }
`;