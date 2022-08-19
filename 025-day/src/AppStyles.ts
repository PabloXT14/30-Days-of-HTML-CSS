import { styled } from "./style";

export const ImageContainer = styled("figure", {
  background: "$shape",
  color: "$secondary",
  display: "block",
  margin: "0 auto",
  fontSize: "$24",
  maxWidth: "25rem",
  width: "100%",
  overflow: "hidden",
  position: "relative",
  textAlign: "center",

  "*": {
    transition: "all 0.45s ease",
  },

  "&::before, &::after": {
    content: "",
    position: "absolute",
    background: "$shape2",
    borderTop: "50px solid $colors$shape2",
    borderBottom: "50px solid $colors$shape2",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    transition: "all 0.3s ease",
    transform: "scaleY(2)",
    zIndex: 1,
    opacity: 0,
  },

  img: {
    display: "block",
    maxHeight: "20rem",
    width: "100%",
    objectFit: "cover",
  },

  a: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 3,
  },

  "&:hover img": {
    opacity: 0.7,
  },

  "&:hover::before, &:hover::after": {
    transform: "scale(1)",
    opacity: 1,
  },

  "&:hover figcaption": {
    opacity: 1,
    transitionDelay: "0.1s",
  }
})

export const ImageInfo = styled("figcaption", {
  zIndex: 2,
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: "1.1em",
  transitionDelay: "0s",
  opacity: 0,

  h3: {
    fontSize: "$24",
    fontWeight: 400,
    letterSpacing: "1px",
    margin: 0,
    textTransform: "uppercase",
  },

  span: {
    display: "block",
    fontWeight: 700,
  }
})