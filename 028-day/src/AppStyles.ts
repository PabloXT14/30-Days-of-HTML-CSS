import { styled } from "./style";

export const Button = styled("button", {
  cursor: "pointer",
  background: "$secondary",
  color: "$text_1",
  textTransform: "uppercase",
  fontSize: "1rem",
  fontWeight: 500,
  border: "none",
  borderBottom: "6px solid $colors$primary",
  borderTop: "6px solid $colors$primary",
  display: "inline-block",
  height: "3rem",
  letterSpacing: "3px",
  lineHeight: "2rem",
  margin: "1rem 3rem",
  padding: "0 $10",
  position: "relative",

  "&::before, &::after": {
    content: "",
    position: "absolute",
    boxSizing: "border-box",
    top: "-6px",
    height: "3rem",
    width: "3rem",
    background: "$secondary",
    borderRadius: "50%",
    border: "6px solid $colors$shape",
    transform: "rotate(45deg)",
    zIndex: -1,
    transition: "all 0.3s ease",
  },

  "&::before": {
    left: "-1.5rem",
    borderRightColor: "$primary",
    borderTopColor: "$primary",
  },

  "&::after": {
    right: "-1.5rem",
    borderLeftColor: "$primary",
    borderBottomColor: "$primary",
  },

  "&:hover": {
    background: "$secondary",
  },

  "&:hover::before, &:hover::after": {
    transform: "rotate(225deg)",
  }
});