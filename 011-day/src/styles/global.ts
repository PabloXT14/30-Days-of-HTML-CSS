import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'body': {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: '$background_body',
    color: '$primary',
    fontSize: 'calc(1em + 1.25vw)',
  },
  '::-webkite-scrollbar': {
    width: '6px',
    height: '8px',
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$thirdy',
    borderRadius: '3px',
  }
})