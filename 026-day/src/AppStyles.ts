import { styled } from "./style";

export const Button = styled("button", {
  position: "relative",
  color: "$secondary",
  background: "transparent",
  cursor: "pointer",
  display: "inline-block",
  padding: "0 2.5rem",
  margin: "1rem 2rem",
  fontSize: "1rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  lineHeight: "2.7em",
  letterSpacing: "1.5px",
  outline: "none",
  boxShadow: "none",
  border: "3px solid $colors$secondary",
  borderRadius: "15px 0 15px 15px",
  transition: "all 0.3s ease",

  "&::before": {
    content: "",
    position: "absolute",
    right: "-3px",
    top: "-3px",
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: "0 35px 35px 0",
    borderColor: "transparent $colors$tertiary transparent transparent",
    zIndex: 1,
  },

  "&:hover": {
    borderColor: "$tertiary",
  }
})