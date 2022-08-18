import { styled } from "../../style";

export const ProfileCardContainer = styled("figure", {
  position: "relative",
  display: "inline-block",
  margin: "$10",
  minWidth: "15rem",
  maxWidth: "20rem",
  width: "100%",
  color: "$text_1",
  textAlign: "left",
  lineHeight: "1.4rem",
  boxShadow: "none"
})

export const ProfileCardDescription = styled("figcaption", {
  position: "relative",
  width: "100%",
  background: "$bg_card",
  color: "$secondary",
  padding: "$24",
  display: "inline-block",
  marginBottom: "$16",
  borderRadius: "$default",

  "&::after": {
    content: "",
    position: "absolute",
    left: "$32",
    top: "100%",
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: "0.625rem 0.625rem 0 0.625rem",
    borderColor: "$border transparent transparent transparent"
  },

  "h3, h4, p": {
    margin: "0 0 0.5rem"
  },

  h3: {
    fontWeight: 600,
    fontSize: "1.2rem",
  },

  h4: {
    color: "$title_4",
    fontWeight: 400,
    letterSpacing: "2px",
  },

  p: {
    fontSize: "0.875rem",
    letterSpacing: "1px",
    opacity: 0.9,
  }
})

export const ProfileCardImage = styled("div", {
  display: "flex",
  alignItems: "center",

  img: {
    borderRadius: "$default",
    width: "6rem",
    height: "6rem",
    objectFit: "cover"
  },
})

export const ProfileIcons = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "0 1rem",
  gap: "0.5rem",

  svg: {
    fontSize: "$24",
    color: "$secondary",
    opacity: 0.75,

    "&:hover": {
      opacity: 1,
      transition: "all 0.35s ease",
    }
  }
})