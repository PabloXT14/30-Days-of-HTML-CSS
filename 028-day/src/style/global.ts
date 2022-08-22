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
    fontFamily: "$default, sans-serif",
    background: "$bg_body",
    color: "$secondary",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
})