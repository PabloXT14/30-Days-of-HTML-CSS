import { styled } from "../../styles/stitches.config";

export const SwitchContainer = styled('label', {
  $$shadow1: '$colors$shadow_1',
  $$shadow2: '$colors$shadow_2',
  position: 'relative',
  display: 'inline-block',
  widthPxToRem: 80,
  heightPxToRem: 80,
  border: '2px solid',
  borderColor: '$border_1',
  backgroundColor: '$background_2',
  boxShadow: `7px 7px 23px $$shadow1, -7px -7px 23px $$shadow2`,
  overflow: 'hidden',
  borderRadius: '60px',

  'input': {
    opacity: 0,
    width: 0,
    height: 0,
  },

  'input:checked + div::before': {
    backgroundColor: '$shadow_2',
    boxShadow: 'none',
  },

  'input:focus + div': {
    boxShadow: '0 0 1px $shadow_3'
  },

  'input:checked ~ .slider-2 div:first-child': {
    transform: 'translateY(-100%)',
    transitionDelay: '1s',
  },

  'input:checked ~ .slider-2 div:last-child': {
    transform: 'translateY(100%)',
    transitionDelay: '1s',
  },

  'input:checked ~ .slider-3': {
    transform: 'translateX(100%)',
    transitionDelay: '0.5s',
  },
 
  'input:checked ~.slider-4': {
    transform: 'translateX(-100%)',
    transitionDelay: '0s',
  },
});

export const Slider = styled('div', {
  position: 'absolute',
  cursor: 'pointer',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  '-webkit-transition': '0.5s',
  transition: 'all 0.5s ease',
  color: '$text',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSizePxToRem: 11,


  variants: {
    sliders: {
      slider1: {
        color: '$shadow_2',
        fontWeight: 600,
        backgroundColor: '$background_3',
      },
      slider2: {
        div: {
          position: 'absolute',
          width: '100%',
          height: '50%',
          left: 0,
          transition: '0.5s',
        },
        '& > div:first-child': {
          transform: 'translateY(0)',
          top: 0,
          backgroundColor: '$background_4',
          transitionDelay: '0s',
        },
        '& > div:last-child': {
          transform: 'translateY(0)',
          bottom: 0,
          backgroundColor: '$background_4',
          borderTop: '1px solid',
          borderColor: '$border_2',
          transitionDelay: '0s',
        },
      },
      slider3: {
        backgroundColor: '$background_5',
        transitionDelay: '0.5s',
        transform: 'translateX(0)',
        borderLeft: '1px solid',
        borderColor: '$border_3',
      },
      slider4: {
        backgroundColor: '$background_6',
        transitionDelay: '1s',
        transform: 'translateX(0)',
        borderRight: '1px solid',
        borderColor: '$border_3',
      }
    }
  }
});