import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'body': {
    backgroundColor: '$primary',
  },
  '::-webkite-scrollbar': {
    width: '6px',
    height: '8px',
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$secondary',
    borderRadius: '3px',
  }
})