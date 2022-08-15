import styled from "styled-components";

export const MenuContainer = styled.ul`
  list-style-type: none;
`

export const MenuOption = styled.li`
  width: 15rem;
  height: 3rem;
  font-size: 1.25rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  color: ${(props) => props.theme.main_text_color};
  text-transform: capitalize;
  line-height: 3rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  & + li {
    margin-top: 0.5rem;
  }

  &:nth-child(odd) {
    background-image: linear-gradient(
      to right, 
      ${(props) => props.theme.primary}, 
      ${(props) => props.theme.secondary}
    );
    text-align: left;
    padding-left: 10%;
    transform: perspective(500px) rotateY(45deg);

    &:hover {
      transform: perspective(200px) rotateY(45deg);
      padding-left: 5%;
    }
  }

  &:nth-child(even) {
    background-image: linear-gradient(
      to left, 
      ${(props) => props.theme.primary}, 
      ${(props) => props.theme.secondary}
    );
    text-align: right;
    padding-right: 10%;
    transform: perspective(500px) rotateY(-45deg);

    &:hover {
      transform: perspective(200px) rotateY(-45deg);
      padding-left: 5%;
    }
  }

`