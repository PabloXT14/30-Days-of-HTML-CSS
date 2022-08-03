import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    height: '100vh',
    display: 'grid',
    placeItems: 'center',
    backgroundImage: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)',
    background: '#318cfe',
    fontFamily: "'Roboto', sans-serif",
  }
});
