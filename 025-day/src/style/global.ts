import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  ":focus": {
    outline: "none",
    boxShadow: "0 0 0 2px $colors$primary",
  },

  "::-webkit-scrollbar": {
    width: "6px",
    height: "6px"
  },

  "::-webkit-scrollbar-track": {
    background: "transparent",
  },

  "::-webkit-scrollbar-thumb": {
    borderRadius: "3px",
    background: "$secondary",
  },

  body: {
    fontFamily: "Roboto, sans-serif",
    background: "$bg_body",
    color: "$secondary",
  },

  ".App": {
    minWidth: "100vw",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  }
})