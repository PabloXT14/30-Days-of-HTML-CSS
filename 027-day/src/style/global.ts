import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
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
    background: "$shape",
  },

  body: {
    fontFamily: "'Roboto', sans-serif",
    background: "$bg_body",
    color: "$text_1",
  },

  ".App": {
    minWidth: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  }
})