import { styled } from "../../styles";

export const GameCardContainer = styled('div', {
  position: 'relative',
  zIndex: 1,
  width: '100%',
  height: '10rem',
  paddingBottom: '150%',
  perspective: '1000px',

  '&::before': {
    display: 'block',
    content: '',
    position: 'absolute',
    top: '5%',
    left: '5%',
    width: '90%',
    height: '90%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    boxShadow: '0 6px 12px 12px rgba(0, 0, 0, 0.4)',
    willChange: 'opacity',
    transformOrigin: 'top',
    transform: 'skewX(0.001deg)',
    transition: 'transform 0.35s ease-in-out, opacity 0.5s ease-in-out'
  },

  '&:hover::before': {
    opacity: '0.6',
    transform: 'rotateX(7deg) translateY(-6px) scale(1.05)'
  },

  '&:hover div': {
    transform: 'rotateX(7deg) translateY(-6px)',
  },

  '&:hover div::after': {
    transform: 'translateY(0%)',
  }
});

export const GameCardCover = styled('div', {
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  backgroundImage: 'linear-gradient(120deg, $background_1 0%, background_2 100%)',
  backgroundSize: 'cover',
  perspectiveOrigin: '50% 50%',
  transformStyle: 'preserve-3d',
  transformOrigin: 'top center',
  willChange: 'transform',
  transform: 'skewX(0.001deg)',
  transition: 'transform 0.35s ease-in-out',

  '&::after': {
    display: 'block',
    content: '',
    position: 'absolute',
    zIndex: 100,
    top: 0,
    left: 0,
    width: '100%',
    height: '120%',
    backgroundImage: '$background_3',
    transform: 'translateY(-20%)',
    willChange: 'transform',
    transition: 'transform 0.65s cubic-bezier(0.18, 0.9, 0.58, 1)',
  }


});