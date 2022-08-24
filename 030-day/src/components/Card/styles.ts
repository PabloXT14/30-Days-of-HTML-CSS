import { styled } from "../../style";

export const CardContainer = styled("figure", {
  fontFamily: "'Lato', Arial, sans-serif",
  position: "relative",
  display: "inline-block",
  overflow: "hidden",
  margin: "$10",
  minWidth: "15rem",
  maxWidth: "20rem",
  width: "100%",
  background: "$secondary",
  color: "$primary",
  textAlign: "center",
  fontSize: "1rem",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.15)",
})

export const CardAvatar = styled("div", {
  padding: "15% 10% 0",

  img: {
    position: "relative",
    width: "7rem",
    height: "7rem",
    // width: "13rem",
    objectFit: "cover",
    borderRadius: "50%",
  }
})

export const CardInfo = styled("figcaption", {
  padding: "5% 10% 15%",

  h3: {
    fontFamily: "'Oswald', sans-serif",
    textTransform: "uppercase",
    fontSize: "1.25rem",
    fontWeight: 400,
    lineHeight: "1.5rem",
    margin: "0.25rem 0",
  },

  h5: {
    fontWeight: 400,
    textTransform: "uppercase",
    color: "$title",
    letterSpacing: "1px",
  },

  p: {
    margin: "1rem 0",
  }
})

export const CardSocialMedias = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.25rem",

  svg: {
    display: "block",
    fontSize: "1.5em",
    color: "$shape",
  },

  "svg:hover": {
    color: "$shape_2",
  }
})