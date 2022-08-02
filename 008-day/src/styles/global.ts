import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'body': {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // minHeight: '100vh',
    backgroundColor: '$primary',
  },
  '::-webkit-scrollbar': {
    width: '6px',
    height: '8px',
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '$background_1',
    borderRadius: '3px',
  }
});