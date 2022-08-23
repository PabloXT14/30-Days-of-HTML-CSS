import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  },

  ":focus": {
    outline: "none",
  },

  "::-webkit-scrollbar": {
    width: "6px",
    height: "6px",
  },

  "::-webkit-scrollbar-track": {
    background: "transparent",
  },

  "::-webkit-scrollbar-thumb": {
    borderRadius: "3px",
    background: "$primary",
  },

  body: {
    fontFamily: "'Roboto', sans-serif",
    background: "$bg_body",
    color: "$secondary",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",

    div: {
      margin: "0 auto",
    }
  },

  ".App": {
    maxWidth: "1000px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2rem",
    // flexWrap: "wrap",
    // background: "Tomato",
  }
})