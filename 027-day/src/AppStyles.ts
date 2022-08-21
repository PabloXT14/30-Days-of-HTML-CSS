import { styled } from "./style";

export const ImageContainer = styled("figure", {
  position: "relative",
  background: "$primary",
  display: "block",
  fontSize: "1rem",
  margin: "$10",
  maxWidth: "315px",
  maxHeight: "200px",
  minHeight: "200px",
  width: "100%",
  overflow: "hidden",
  textAlign: "center",
  // backgroundColor: "red",

  "*": {
    transition: "all 0.35s ease",
  },

  img: {
    display: "block",
    width: "100%",
    objectFit: "cover",
    maxHeight: "100%",
  },

  a: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 3,
  },

  "&::before, &::after": {
    content: "",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "$primary",
    borderLeft: "3px solid $colors$secondary",
    borderRight: "3px solid $colors$secondary",
    opacity: 0.9,
    zIndex: 1,
    transition: "all 0.35s ease",
  },

  "&::before": {
    transform: "skew(45deg) translateX(-155%)",
  },

  "&::after": {
    transform: "skew(45deg) translateX(155%)",
  },

  "&:hover img": {
    opacity: 0.5,
  },

  "&:hover::before": {
    transform: "skew(45deg) translateX(-55%)"
  },

  "&:hover::after": {
    transform: "skew(45deg) translateX(55%)"
  },

  "&:hover figcaption": {
    transform: "translate(-50%, -50%) scale(1)",
    opacity: 1,
  },
})

export const ImageTitle = styled("figcaption", {
  position: "absolute",
  display: "block",
  zIndex: 2,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) scale(0.5)",
  opacity: 0,
  boxShadow: "0 0 10px $colors$primary",

  h3: {
    background: "$primary",
    color: "$secondary",
    fontSize: "1em",
    fontWeight: 600,
    letterSpacing: "1px",
    border: "2px solid $colors$secondary",
    margin: 0,
    padding: "5px 10px",
    textTransform: "uppercase",
  }
})