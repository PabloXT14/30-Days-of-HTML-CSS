import { styled } from "./styles"; 

export const MainContainer = styled('main', {
  position: 'relative',
});

export const Drop = styled('div', {
  position: 'absolute',
  height: '12.5rem',
  width: '12.5rem',
  background: '#54abfb',
  borderRadius: '51% 49% 48% 52% / 62% 44% 56% 38%',
  opacity: '0.8',
  border: '2px solid #3d93ff',

  '&::before': {
    content: '',
    position: 'absolute',
    height: '100%',
    width: '100%',
    background: '#318cfe',
    borderRadius: '51% 49% 48% 52% / 62% 44% 56% 38%',
    boxShadow: `
    -20px 30px 16px #1b6cfb, 
    -40px 60px 32px #1b6cfb, 
    inset -6px 6px 10px #1b6cfb,
    inset 2px 6px 10px #1a74e5, 
    inset 20px -20px 22px white, 
    inset 40px -40px 44px #a8ceff`
  }, 

  '&::after': {
    content: '',
    position: 'absolute',
    height: '2.5rem',
    width: '2.5rem',
    background: '#e6fdfb',
    borderRadius: '44% 56% 46% 54% / 36% 50% 50% 64%',
    left: '8.125rem',
    top: '2.5rem',
    boxShadow: '16px 40px 0 -10px white',
    opacity: '0.8',
  },

  variants: {
    options: {
      drop1: {
        left: '-6.25rem',
        top: '-3.125rem',
      },
      drop2: {
        right: '-6.25rem',
        bottom: '-3.125rem',
        zIndex: '-1',
        borderRadius: '46% 50% 39% 54% / 56% 57% 50% 50%',

        '&::before': {
          borderRadius: '46% 50% 39% 54% / 56% 57% 50% 50%',
        }
      }
    }
  },

  defaultVariants: {
    options: 'drop1',
  }
});

export const Content = styled('div', {
  display: 'grid',
  placeItems: 'center',

  h1: {
    fontSize: '4.5rem',
    color: 'white',
  },

  p: {
    color: 'white',
    fontSize: '1.25rem',
  }
});