import { styled } from "../../style";

export const CardContainer = styled("div", {
  position: "relative",
  cursor: "pointer",

  "& > div": {
    maxWidth: "18.75rem",
    height: "12.5rem",
    transition: "all 0.5s ease",
  },

  "&:hover .preview": {
    background: "$primary",
    transform: "translateY(0)",
  },

  "&:hover .preview .content": {
    opacity: 1,
  },

  "&:hover .description": {
    transform: "translateY(0)",
  }
})

export const CardPreview = styled("div", {
  position: "relative",
  background: "$bg_body",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1,
  transform: "translateY(100px)",

  ".content": {
    opacity: 0.2,
    transition: "all 0.5s ease",
  },

  img: {
    maxWidth: "100px",
  },

  h3: {
    margin: "0.625rem 0 0",
    padding: 0,
    color: "$secondary",
    textAlign: "center",
    fontSize: "1.5rem",
  }
})

export const CardDescription = styled("div", {
  position: "relative",
  background: "$secondary",
  color: "$tertiary",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 1.25rem",
  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8)",
  transform: "translateY(-100px)",

  p: {
    margin: 0,
    padding: 0,
  },

  a: {
    margin: "1rem 0 0",
    display: "inline-block",
    textDecoration: "none",
    fontWeight: 900,
    color: "$bg_body",
    padding: "0.5rem",
    border: "1px solid $colors$bg_body",
  },

  "a:hover": {
    background: "$bg_body",
    color: "$secondary",
  }
})